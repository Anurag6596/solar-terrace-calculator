import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Sun, Zap, Home, Calculator } from 'lucide-react';
import UserInfoForm from '@/components/UserInfoForm';
import ConsumptionForm from '@/components/ConsumptionForm';
import SolarCalculator from '@/components/SolarCalculator';
import ResultsDisplay from '@/components/ResultsDisplay';

const Index = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    mobile: '',
    terraceSize: ''
  });

  const [monthlyConsumption, setMonthlyConsumption] = useState({
    january: '', february: '', march: '', april: '', may: '', june: '',
    july: '', august: '', september: '', october: '', november: '', december: ''
  });

  const [calculationResult, setCalculationResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper to prepare the payload for MongoDB
  const prepareCalculationPayload = () => {
    const consumptionValues = Object.values(monthlyConsumption);
    const totalAnnualConsumption = consumptionValues.reduce((sum, val) => sum + parseFloat(val), 0);
    const averageMonthlyConsumption = totalAnnualConsumption / 12;
    const terraceArea = parseFloat(userInfo.terraceSize);

    const panelEfficiency = 0.15;
    const sunHoursPerDay = 5;
    const systemEfficiency = 0.85;

    const dailyConsumption = averageMonthlyConsumption;
    const requiredCapacityKW = dailyConsumption / (sunHoursPerDay * 30 * systemEfficiency);
    const panelAreaRequired = 7;
    const maxCapacityByArea = terraceArea / panelAreaRequired;
    const recommendedCapacity = Math.min(requiredCapacityKW, maxCapacityByArea);
    const finalCapacity = Math.ceil(recommendedCapacity);

    return {
      userInfo: {
        ...userInfo,
        terraceSize: terraceArea
      },
      monthlyConsumption: Object.fromEntries(
        Object.entries(monthlyConsumption).map(([k, v]) => [k, parseFloat(v)])
      ),
      totalAnnualConsumption,
      averageMonthlyConsumption,
      recommendedCapacity: finalCapacity,
      maxCapacityByArea: Math.floor(maxCapacityByArea),
      estimatedSavings: finalCapacity * 1500 * 12,
      panelsRequired: Math.ceil(finalCapacity * 3)
    };
  };

  const handleCalculate = () => {
    // Validate form data
    if (!userInfo.name || !userInfo.mobile || !userInfo.terraceSize) {
      toast({
        title: "Missing Information",
        description: "Please fill in all user details.",
        variant: "destructive"
      });
      return;
    }

    const consumptionValues = Object.values(monthlyConsumption);
    if (consumptionValues.some(val => !val || parseFloat(val) <= 0)) {
      toast({
        title: "Invalid Consumption Data",
        description: "Please enter valid consumption values for all months.",
        variant: "destructive"
      });
      return;
    }

    const result = prepareCalculationPayload();
    setCalculationResult(result);
    toast({
      title: "Calculation Complete!",
      description: `Recommended solar capacity: ${result.recommendedCapacity}KW`,
    });
  };

  const handleSubmit = async () => {
    if (!calculationResult) {
      toast({
        title: "No Calculation Found",
        description: "Please calculate the solar capacity first.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/save-calculation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(calculationResult)
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      toast({
        title: "Success!",
        description: "Your solar calculation has been saved successfully.",
      });

      setUserInfo({ name: '', mobile: '', terraceSize: '' });
      setMonthlyConsumption({
        january: '', february: '', march: '', april: '', may: '', june: '',
        july: '', august: '', september: '', october: '', november: '', december: ''
      });
      setCalculationResult(null);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="solar-gradient text-white py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sun className="w-12 h-12 mr-4 animate-pulse-slow" />
            <h1 className="text-4xl md:text-5xl font-bold">Solar Power Calculator</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Calculate the perfect solar panel capacity for your home based on your terrace size and electricity consumption
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
            <ConsumptionForm 
              monthlyConsumption={monthlyConsumption} 
              setMonthlyConsumption={setMonthlyConsumption} 
            />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleCalculate} 
                className="flex-1 solar-gradient text-white hover:opacity-90 transition-opacity py-6 text-lg"
                size="lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Solar Capacity
              </Button>
              
              {calculationResult && (
                <Button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                  size="lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Saving...' : 'Save Results'}
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            <SolarCalculator />
            {calculationResult && (
              <ResultsDisplay result={calculationResult} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
