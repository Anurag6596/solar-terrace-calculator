
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap } from 'lucide-react';

interface ConsumptionFormProps {
  monthlyConsumption: {
    january: string; february: string; march: string; april: string;
    may: string; june: string; july: string; august: string;
    september: string; october: string; november: string; december: string;
  };
  setMonthlyConsumption: (consumption: any) => void;
}

const ConsumptionForm: React.FC<ConsumptionFormProps> = ({ monthlyConsumption, setMonthlyConsumption }) => {
  const months = [
    { key: 'january', label: 'January' },
    { key: 'february', label: 'February' },
    { key: 'march', label: 'March' },
    { key: 'april', label: 'April' },
    { key: 'may', label: 'May' },
    { key: 'june', label: 'June' },
    { key: 'july', label: 'July' },
    { key: 'august', label: 'August' },
    { key: 'september', label: 'September' },
    { key: 'october', label: 'October' },
    { key: 'november', label: 'November' },
    { key: 'december', label: 'December' }
  ];

  const handleInputChange = (month: string, value: string) => {
    setMonthlyConsumption(prev => ({ ...prev, [month]: value }));
  };

  return (
    <Card className="form-shadow border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <Zap className="w-5 h-5 mr-2" />
          Monthly Electricity Consumption (Units/kWh)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {months.map((month) => (
            <div key={month.key} className="space-y-2">
              <Label htmlFor={month.key} className="text-sm font-medium text-gray-700">
                {month.label} *
              </Label>
              <Input
                id={month.key}
                type="number"
                placeholder="Units"
                value={monthlyConsumption[month.key]}
                onChange={(e) => handleInputChange(month.key, e.target.value)}
                className="h-10 border-2 border-gray-200 focus:border-green-500 transition-colors"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsumptionForm;
