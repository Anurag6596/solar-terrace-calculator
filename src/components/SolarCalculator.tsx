
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Leaf, TrendingUp } from 'lucide-react';

const SolarCalculator = () => {
  const benefits = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Clean Energy",
      description: "Harness the power of the sun for sustainable electricity"
    },
    {
      icon: <Battery className="w-8 h-8 text-blue-500" />,
      title: "Energy Independence",
      description: "Reduce dependency on grid electricity"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Eco-Friendly",
      description: "Zero carbon emissions, help protect the environment"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Cost Savings",
      description: "Significant reduction in electricity bills"
    }
  ];

  return (
    <Card className="form-shadow border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <Sun className="w-5 h-5 mr-2" />
          Why Choose Solar Power?
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-900 mb-2">How We Calculate:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Average daily consumption based on your monthly usage</li>
            <li>• Available terrace area for panel installation</li>
            <li>• Solar panel efficiency and system losses</li>
            <li>• Local sunlight hours and weather conditions</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarCalculator;
