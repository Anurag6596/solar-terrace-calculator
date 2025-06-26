
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Zap, Home, TrendingUp, Battery, Leaf } from 'lucide-react';

interface ResultsDisplayProps {
  result: {
    userInfo: any;
    monthlyConsumption: any;
    totalAnnualConsumption: number;
    averageMonthlyConsumption: number;
    terraceArea: number;
    recommendedCapacity: number;
    maxCapacityByArea: number;
    estimatedSavings: number;
    panelsRequired: number;
  };
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  return (
    <div className="space-y-6">
      <Card className="form-shadow border-0 bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center">
            <Sun className="w-5 h-5 mr-2" />
            Solar Calculation Results
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {result.recommendedCapacity}KW
            </h3>
            <p className="text-gray-600">Recommended Solar Capacity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Zap className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-700">Annual Consumption</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{result.totalAnnualConsumption.toFixed(0)} kWh</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Home className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-semibold text-gray-700">Terrace Area</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{result.terraceArea} sq ft</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Battery className="w-5 h-5 text-purple-500 mr-2" />
                <span className="font-semibold text-gray-700">Panels Required</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{result.panelsRequired} panels</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-orange-500 mr-2" />
                <span className="font-semibold text-gray-700">Est. Annual Savings</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">₹{result.estimatedSavings.toLocaleString()}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="text-gray-600">Max Capacity by Area:</span>
              <Badge variant="secondary" className="text-sm">
                {result.maxCapacityByArea}KW
              </Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="text-gray-600">Avg. Monthly Consumption:</span>
              <Badge variant="outline" className="text-sm">
                {result.averageMonthlyConsumption.toFixed(0)} kWh
              </Badge>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
            <div className="flex items-center mb-2">
              <Leaf className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold text-green-800">Environmental Impact</span>
            </div>
            <p className="text-sm text-green-700">
              This solar installation will offset approximately {(result.recommendedCapacity * 1.5).toFixed(1)} tons of CO₂ annually, 
              equivalent to planting {Math.floor(result.recommendedCapacity * 18)} trees!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="form-shadow border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Customer Information Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-600">Name:</span>
              <p className="text-gray-900">{result.userInfo.name}</p>
            </div>
            <div>
              <span className="font-medium text-gray-600">Mobile:</span>
              <p className="text-gray-900">{result.userInfo.mobile}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
