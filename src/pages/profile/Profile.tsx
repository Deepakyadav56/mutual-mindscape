
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
      <div className="flex items-center mb-6 p-4 bg-white dark:bg-teal-800/80 rounded-xl shadow-sm">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-2xl font-semibold mr-4">
          R
        </div>
        <div>
          <h1 className="text-2xl font-bold text-teal-800 dark:text-white">Rahul Sharma</h1>
          <p className="text-teal-600 dark:text-teal-200">rahul.sharma@example.com</p>
          <div className="flex items-center mt-1">
            <span className="text-xs px-2 py-0.5 bg-teal-50 dark:bg-teal-700 text-teal-700 dark:text-teal-100 rounded-full">KYC Verified</span>
          </div>
        </div>
      </div>
      
      {/* Account Overview */}
      <Card className="mb-6 border-teal-100 dark:border-teal-700 dark:bg-teal-800/50">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold text-teal-800 dark:text-white mb-3">Account Overview</h2>
          
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3 dark:bg-teal-700 dark:text-teal-200">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800 dark:text-white">KYC Verified</h3>
                <p className="text-xs text-teal-600 dark:text-teal-200">Your KYC verification is complete</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-teal-600 border-teal-200 dark:text-teal-200 dark:border-teal-700 dark:hover:bg-teal-700">View</Button>
          </div>
          
          <Separator className="my-3 bg-teal-100 dark:bg-teal-700" />
          
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="icon-container-amber mr-3 dark:bg-amber-700/70 dark:text-amber-200">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800 dark:text-white">Bank Account</h3>
                <p className="text-xs text-teal-600 dark:text-teal-200">HDFC Bank ****1234</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-teal-600 border-teal-200 dark:text-teal-200 dark:border-teal-700 dark:hover:bg-teal-700">Manage</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Settings */}
      <h2 className="text-lg font-bold text-teal-800 dark:text-white mb-4 px-1">Account Settings</h2>
      
      <Card className="mb-6 overflow-hidden border-teal-100 dark:border-teal-700 dark:bg-teal-800/50">
        <CardContent className="p-0">
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3 dark:bg-teal-700 dark:text-teal-200">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800 dark:text-white">Biometric Login</h3>
                <p className="text-xs text-teal-600 dark:text-teal-200">Use fingerprint for quick access</p>
              </div>
            </div>
            <Switch className="data-[state=checked]:bg-teal-600" />
          </div>
          
          <Separator className="bg-teal-100 dark:bg-teal-700" />
          
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3 dark:bg-teal-700 dark:text-teal-200">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800 dark:text-white">Notifications</h3>
                <p className="text-xs text-teal-600 dark:text-teal-200">Get updates about your investments</p>
              </div>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-teal-600" />
          </div>
          
          <Separator className="bg-teal-100 dark:bg-teal-700" />
          
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon-container-teal mr-3 dark:bg-teal-700 dark:text-teal-200">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-teal-800 dark:text-white">Investment Reports</h3>
                <p className="text-xs text-teal-600 dark:text-teal-200">Receive monthly performance reports</p>
              </div>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-teal-600" />
          </div>
        </CardContent>
      </Card>
      
      {/* More Options */}
      <h2 className="text-lg font-bold text-teal-800 dark:text-white mb-4 px-1">More Options</h2>
      
      <Card className="mb-6 overflow-hidden border-teal-100 dark:border-teal-700 dark:bg-teal-800/50">
        <CardContent className="p-0">
          <div className="p-4 flex items-center text-teal-800 dark:text-white hover:bg-teal-50 dark:hover:bg-teal-700/50 transition-colors">
            <User className="w-5 h-5 text-teal-600 dark:text-teal-200 mr-3" />
            <h3 className="font-medium flex-1">Personal Details</h3>
            <ChevronRight className="w-4 h-4 text-teal-400 dark:text-teal-300" />
          </div>
          
          <Separator className="bg-teal-100 dark:bg-teal-700" />
          
          <div className="p-4 flex items-center text-teal-800 dark:text-white hover:bg-teal-50 dark:hover:bg-teal-700/50 transition-colors">
            <Star className="w-5 h-5 text-teal-600 dark:text-teal-200 mr-3" />
            <h3 className="font-medium flex-1">Referral & Rewards</h3>
            <ChevronRight className="w-4 h-4 text-teal-400 dark:text-teal-300" />
          </div>
          
          <Separator className="bg-teal-100 dark:bg-teal-700" />
          
          <div className="p-4 flex items-center text-teal-800 dark:text-white hover:bg-teal-50 dark:hover:bg-teal-700/50 transition-colors">
            <HelpCircle className="w-5 h-5 text-teal-600 dark:text-teal-200 mr-3" />
            <h3 className="font-medium flex-1">Help & Support</h3>
            <ChevronRight className="w-4 h-4 text-teal-400 dark:text-teal-300" />
          </div>
          
          <Separator className="bg-teal-100 dark:bg-teal-700" />
          
          <div className="p-4 flex items-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-3" />
            <h3 className="font-medium">Logout</h3>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-xs text-teal-600 dark:text-teal-200 mb-10">
        <p>App Version 1.0.0</p>
        <p className="mt-1">© 2025 WealthWise. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Profile;
