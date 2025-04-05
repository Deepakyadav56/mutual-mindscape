
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  User, Star, CreditCard, HelpCircle, ChevronRight, LogOut,
  Settings, Info, Shield, Bell
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";

const Profile = () => {
  const { theme } = useTheme();
  
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
      variant: "default",
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-20"
    >
      {/* Profile Header */}
      <motion.div 
        className="rounded-2xl mb-6 overflow-hidden"
        variants={item}
      >
        <div className="h-24 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-700 relative">
          <div className="absolute -bottom-12 left-4 w-24 h-24">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 text-white flex items-center justify-center text-3xl font-semibold shadow-lg border-4 border-white dark:border-teal-900 overflow-hidden">
              R
            </div>
          </div>
        </div>
        
        <div className="pt-14 pb-4 px-4 bg-white dark:bg-teal-800/50 rounded-b-2xl shadow-sm">
          <h1 className="text-2xl font-bold text-teal-800 dark:text-white">Rahul Sharma</h1>
          <p className="text-teal-600 dark:text-teal-200">rahul.sharma@example.com</p>
          <div className="flex items-center mt-2">
            <span className="text-xs px-2 py-0.5 bg-teal-50 dark:bg-teal-700/80 text-teal-700 dark:text-teal-100 rounded-full font-medium">KYC Verified</span>
            <Button variant="link" size="sm" className="ml-1 py-0 h-auto">View KYC</Button>
          </div>
        </div>
      </motion.div>
      
      {/* Account Overview */}
      <motion.div variants={item}>
        <Card className="mb-6 border-teal-100/70 dark:border-teal-700/70 dark:bg-teal-800/50 shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold text-teal-800 dark:text-white mb-4">Account Overview</h2>
            
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-teal-50 dark:bg-teal-700/70 text-teal-600 dark:text-teal-200 mr-3">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-teal-800 dark:text-white">KYC Status</h3>
                  <p className="text-xs text-teal-600 dark:text-teal-300">Verified on 15 May, 2023</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-teal-600 border-teal-100/70 dark:text-teal-200 dark:border-teal-700/70 dark:hover:bg-teal-700/50">View</Button>
            </div>
            
            <Separator className="my-1 bg-teal-100/50 dark:bg-teal-700/50" />
            
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 mr-3">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-teal-800 dark:text-white">Bank Account</h3>
                  <p className="text-xs text-teal-600 dark:text-teal-300">HDFC Bank ****1234</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-teal-600 border-teal-100/70 dark:text-teal-200 dark:border-teal-700/70 dark:hover:bg-teal-700/50">Manage</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Settings */}
      <motion.div variants={item}>
        <h2 className="text-lg font-bold text-teal-800 dark:text-white mb-4 px-1">Account Settings</h2>
        
        <Card className="mb-6 overflow-hidden border-teal-100/70 dark:border-teal-700/70 dark:bg-teal-800/50 shadow-md">
          <CardContent className="p-0">
            <div className="p-4 flex justify-between items-center hover:bg-teal-50/50 dark:hover:bg-teal-700/30 transition-colors">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-teal-50 dark:bg-teal-700/70 text-teal-600 dark:text-teal-200 mr-3">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-teal-800 dark:text-white">Biometric Login</h3>
                  <p className="text-xs text-teal-600 dark:text-teal-300">Use fingerprint for quick access</p>
                </div>
              </div>
              <Switch className="data-[state=checked]:bg-teal-600" />
            </div>
            
            <Separator className="bg-teal-100/50 dark:bg-teal-700/50" />
            
            <div className="p-4 flex justify-between items-center hover:bg-teal-50/50 dark:hover:bg-teal-700/30 transition-colors">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-teal-50 dark:bg-teal-700/70 text-teal-600 dark:text-teal-200 mr-3">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-teal-800 dark:text-white">Notifications</h3>
                  <p className="text-xs text-teal-600 dark:text-teal-300">Get updates about your investments</p>
                </div>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-teal-600" />
            </div>
            
            <Separator className="bg-teal-100/50 dark:bg-teal-700/50" />
            
            <div className="p-4 flex justify-between items-center hover:bg-teal-50/50 dark:hover:bg-teal-700/30 transition-colors">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-teal-50 dark:bg-teal-700/70 text-teal-600 dark:text-teal-200 mr-3">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-teal-800 dark:text-white">Investment Reports</h3>
                  <p className="text-xs text-teal-600 dark:text-teal-300">Receive monthly performance reports</p>
                </div>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-teal-600" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* More Options */}
      <motion.div variants={item}>
        <h2 className="text-lg font-bold text-teal-800 dark:text-white mb-4 px-1">More Options</h2>
        
        <Card className="mb-6 overflow-hidden border-teal-100/70 dark:border-teal-700/70 dark:bg-teal-800/50 shadow-md">
          <CardContent className="p-0">
            <div className="flex items-center text-teal-800 dark:text-white hover:bg-teal-50/50 dark:hover:bg-teal-700/30 transition-colors">
              <div className="flex-1 p-4 flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-teal-50 dark:bg-teal-700/70 text-teal-600 dark:text-teal-200 mr-3">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="font-medium">Personal Details</h3>
              </div>
              <div className="pr-4">
                <ChevronRight className="w-5 h-5 text-teal-400 dark:text-teal-300" />
              </div>
            </div>
            
            <Separator className="bg-teal-100/50 dark:bg-teal-700/50" />
            
            <div className="flex items-center text-teal-800 dark:text-white hover:bg-teal-50/50 dark:hover:bg-teal-700/30 transition-colors">
              <div className="flex-1 p-4 flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 mr-3">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="font-medium">Referral & Rewards</h3>
              </div>
              <div className="pr-4">
                <ChevronRight className="w-5 h-5 text-teal-400 dark:text-teal-300" />
              </div>
            </div>
            
            <Separator className="bg-teal-100/50 dark:bg-teal-700/50" />
            
            <div className="flex items-center text-teal-800 dark:text-white hover:bg-teal-50/50 dark:hover:bg-teal-700/30 transition-colors">
              <div className="flex-1 p-4 flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 mr-3">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-medium">Help & Support</h3>
              </div>
              <div className="pr-4">
                <ChevronRight className="w-5 h-5 text-teal-400 dark:text-teal-300" />
              </div>
            </div>
            
            <Separator className="bg-teal-100/50 dark:bg-teal-700/50" />
            
            <div className="flex items-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" onClick={handleLogout}>
              <div className="flex-1 p-4 flex items-center">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 mr-3">
                  <LogOut className="w-5 h-5" />
                </div>
                <h3 className="font-medium">Logout</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div 
        className="text-center text-xs text-teal-600 dark:text-teal-200 mb-10"
        variants={item}
      >
        <p>App Version 1.0.0</p>
        <p className="mt-1">© 2025 WealthWise. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
