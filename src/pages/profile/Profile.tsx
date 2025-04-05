
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  User, Star, CreditCard, HelpCircle, ChevronRight, LogOut,
  Settings, Info, Shield, Bell
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
      variant: "default",
    });
  };

  return (
    <div className="fade-in">
      {/* Profile Header */}
      <div className="flex items-center mb-6 p-4 bg-white rounded-xl shadow-sm">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-2xl font-semibold mr-4">
          R
        </div>
        <div>
          <h1 className="text-2xl font-bold text-teal-800">Rahul Sharma</h1>
          <p className="text-teal-600">rahul.sharma@example.com</p>
          <div className="flex items-center mt-1">
            <span className="text-xs px-2 py-0.5 bg-teal-50 text-teal-700 rounded-full">KYC Verified</span>
          </div>
        </div>
      </div>
      
      {/* Account Overview */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold text-teal-800 mb-3">Account Overview</h2>
          
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800">KYC Verified</h3>
                <p className="text-xs text-teal-600">Your KYC verification is complete</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-teal-600 border-teal-200">View</Button>
          </div>
          
          <Separator className="my-3 bg-teal-100" />
          
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="icon-container-amber mr-3">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800">Bank Account</h3>
                <p className="text-xs text-teal-600">HDFC Bank ****1234</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-teal-600 border-teal-200">Manage</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Settings */}
      <h2 className="text-lg font-bold text-teal-800 mb-4 px-1">Account Settings</h2>
      
      <Card className="mb-6 overflow-hidden">
        <CardContent className="p-0">
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800">Biometric Login</h3>
                <p className="text-xs text-teal-600">Use fingerprint for quick access</p>
              </div>
            </div>
            <Switch className="data-[state=checked]:bg-teal-600" />
          </div>
          
          <Separator className="bg-teal-100" />
          
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800">Notifications</h3>
                <p className="text-xs text-teal-600">Get updates about your investments</p>
              </div>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-teal-600" />
          </div>
          
          <Separator className="bg-teal-100" />
          
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800">Investment Reports</h3>
                <p className="text-xs text-teal-600">Receive monthly performance reports</p>
              </div>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-teal-600" />
          </div>
        </CardContent>
      </Card>
      
      {/* More Options */}
      <h2 className="text-lg font-bold text-teal-800 mb-4 px-1">More Options</h2>
      
      <Card className="mb-6 overflow-hidden">
        <CardContent className="p-0">
          <div className="p-4 flex items-center text-teal-800">
            <User className="w-5 h-5 text-teal-600 mr-3" />
            <h3 className="font-medium flex-1">Personal Details</h3>
            <ChevronRight className="w-4 h-4 text-teal-400" />
          </div>
          
          <Separator className="bg-teal-100" />
          
          <div className="p-4 flex items-center text-teal-800">
            <Star className="w-5 h-5 text-teal-600 mr-3" />
            <h3 className="font-medium flex-1">Referral & Rewards</h3>
            <ChevronRight className="w-4 h-4 text-teal-400" />
          </div>
          
          <Separator className="bg-teal-100" />
          
          <div className="p-4 flex items-center text-teal-800">
            <HelpCircle className="w-5 h-5 text-teal-600 mr-3" />
            <h3 className="font-medium flex-1">Help & Support</h3>
            <ChevronRight className="w-4 h-4 text-teal-400" />
          </div>
          
          <Separator className="bg-teal-100" />
          
          <div className="p-4 flex items-center text-red-600" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-3" />
            <h3 className="font-medium">Logout</h3>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-xs text-teal-600 mb-10">
        <p>App Version 1.0.0</p>
        <p className="mt-1">© 2025 WealthWise. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Profile;
