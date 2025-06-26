
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Phone, Home } from 'lucide-react';

interface UserInfoFormProps {
  userInfo: {
    name: string;
    mobile: string;
    terraceSize: string;
  };
  setUserInfo: (info: any) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ userInfo, setUserInfo }) => {
  const handleInputChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="form-shadow border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <User className="w-5 h-5 mr-2" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={userInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
            <Phone className="w-4 h-4 inline mr-1" />
            Mobile Number *
          </Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={userInfo.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="terraceSize" className="text-sm font-medium text-gray-700">
            <Home className="w-4 h-4 inline mr-1" />
            Terrace Size (sq ft) *
          </Label>
          <Input
            id="terraceSize"
            type="number"
            placeholder="Enter terrace size in square feet"
            value={userInfo.terraceSize}
            onChange={(e) => handleInputChange('terraceSize', e.target.value)}
            className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoForm;
