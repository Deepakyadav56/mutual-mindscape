
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const KycVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [panNumber, setPanNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="panNumber">PAN Card Number</Label>
              <Input
                id="panNumber"
                placeholder="ABCDE1234F"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                className="bg-white input-field"
              />
              <p className="text-xs text-app-charcoal opacity-70">
                Enter your 10-digit PAN Card number
              </p>
            </div>
            
            <div className="rounded-xl bg-app-light-mint p-4">
              <h4 className="font-medium text-app-charcoal mb-2">Why do we need this?</h4>
              <p className="text-sm text-app-charcoal opacity-80">
                As per SEBI regulations, we need to verify your identity before you can start investing in mutual funds.
              </p>
            </div>
            
            <Button 
              onClick={handleNextStep} 
              className="w-full bg-app-charcoal text-app-mint rounded-full py-6 mt-4"
              disabled={panNumber.length !== 10}
            >
              Continue
            </Button>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="aadhaarNumber">Aadhaar Number</Label>
              <Input
                id="aadhaarNumber"
                placeholder="1234 5678 9012"
                value={aadhaarNumber}
                onChange={(e) => setAadhaarNumber(e.target.value)}
                className="bg-white input-field"
              />
              <p className="text-xs text-app-charcoal opacity-70">
                Enter your 12-digit Aadhaar number
              </p>
            </div>
            
            <div className="rounded-xl bg-app-light-mint p-4">
              <h4 className="font-medium text-app-charcoal mb-2">Please Note</h4>
              <p className="text-sm text-app-charcoal opacity-80">
                We will send an OTP to the mobile number linked with your Aadhaar for verification.
              </p>
            </div>
            
            <Button 
              onClick={handleNextStep} 
              className="w-full bg-app-charcoal text-app-mint rounded-full py-6 mt-4"
              disabled={aadhaarNumber.length !== 12}
            >
              Send OTP
            </Button>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="otp" className="text-center block">Enter OTP sent to your mobile</Label>
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-12 h-12 text-xl bg-white" />
                    <InputOTPSlot index={1} className="w-12 h-12 text-xl bg-white" />
                    <InputOTPSlot index={2} className="w-12 h-12 text-xl bg-white" />
                    <InputOTPSlot index={3} className="w-12 h-12 text-xl bg-white" />
                    <InputOTPSlot index={4} className="w-12 h-12 text-xl bg-white" />
                    <InputOTPSlot index={5} className="w-12 h-12 text-xl bg-white" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-xs text-app-charcoal opacity-70 text-center">
                Didn't receive OTP? <button className="text-app-green underline">Resend</button>
              </p>
            </div>
            
            <Button 
              onClick={handleNextStep} 
              className="w-full bg-app-charcoal text-app-mint rounded-full py-6 mt-4"
              disabled={otp.length !== 6}
            >
              Verify OTP
            </Button>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-app-green/20 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-app-green"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">KYC Verification Successful</h3>
              <p className="text-sm text-app-charcoal opacity-80 mb-6">
                You've successfully completed your KYC verification. You can now start investing!
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)} 
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-app-charcoal"
                >
                  I agree to the Terms & Conditions and Privacy Policy
                </label>
              </div>
            </div>
            
            <Button 
              onClick={handleNextStep} 
              className="w-full bg-app-charcoal text-app-mint rounded-full py-6 mt-4"
              disabled={!termsAccepted}
            >
              Start Investing
            </Button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-app-mint flex flex-col">
      <div className="py-6 px-4">
        <div className="flex justify-between items-center mb-8">
          <button onClick={() => step > 1 ? setStep(step - 1) : navigate("/onboarding")} className="text-app-charcoal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1 rounded-full ${
                  s <= step ? "bg-app-charcoal w-6" : "bg-app-light-mint w-4"
                } transition-all`}
              />
            ))}
          </div>
          <div className="w-6" />
        </div>
        
        <h2 className="text-2xl font-bold text-app-charcoal mb-2">KYC Verification</h2>
        <p className="text-app-charcoal opacity-80 mb-6">
          Step {step} of 4: {step === 1 ? "PAN Details" : step === 2 ? "Aadhaar Details" : step === 3 ? "Mobile Verification" : "Confirmation"}
        </p>
        
        <Card className="bg-white rounded-2xl border-app-light-mint mt-4 shadow-sm">
          <CardContent className="p-6">
            {renderStepContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KycVerification;
