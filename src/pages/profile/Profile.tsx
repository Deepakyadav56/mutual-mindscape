
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-finance-primary text-white flex items-center justify-center text-2xl font-semibold mr-4">
          R
        </div>
        <div>
          <h1 className="text-2xl font-bold text-finance-primary">Rahul Sharma</h1>
          <p className="text-finance-muted">rahul.sharma@example.com</p>
        </div>
      </div>
      
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-finance-primary">KYC Verified</h3>
                <p className="text-xs text-finance-muted">Your KYC verification is complete</p>
              </div>
            </div>
            <Button variant="outline" className="text-sm h-9 px-3">View</Button>
          </div>
          
          <Separator className="my-2" />
          
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-orange-600"
                >
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-finance-primary">Bank Account</h3>
                <p className="text-xs text-finance-muted">HDFC Bank ****1234</p>
              </div>
            </div>
            <Button variant="outline" className="text-sm h-9 px-3">Manage</Button>
          </div>
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-bold text-finance-primary mb-4">Account Settings</h2>
      
      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-finance-primary">Biometric Login</h3>
              <p className="text-xs text-finance-muted">Use fingerprint for quick access</p>
            </div>
            <Switch />
          </div>
          
          <Separator />
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-finance-primary">Notifications</h3>
              <p className="text-xs text-finance-muted">Get updates about your investments</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-finance-primary">Investment Reports</h3>
              <p className="text-xs text-finance-muted">Receive monthly performance reports</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-bold text-finance-primary mb-4">More Options</h2>
      
      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="p-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-finance-muted mr-3"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h3 className="font-medium text-finance-primary">Personal Details</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-finance-muted ml-auto"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          
          <Separator />
          
          <div className="p-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-finance-muted mr-3"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <h3 className="font-medium text-finance-primary">Referral & Rewards</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-finance-muted ml-auto"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          
          <Separator />
          
          <div className="p-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-finance-muted mr-3"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <h3 className="font-medium text-finance-primary">Help & Support</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-finance-muted ml-auto"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          
          <Separator />
          
          <div className="p-4 flex items-center text-finance-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-3"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <h3 className="font-medium">Logout</h3>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-xs text-finance-muted mb-4">
        <p>App Version 1.0.0</p>
        <p className="mt-1">© 2023 WealthWise. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Profile;
