
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Camera, Upload, CreditCard, AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Calendar, User, X } from "lucide-react";

const KycVerification = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [kycMethod, setKycMethod] = useState<"aadhaar" | "pan">("aadhaar");
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
  
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "male",
    aadhaarNumber: "",
    panNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    occupation: "",
    annualIncome: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleVerifyKyc = () => {
    setVerificationStatus("verifying");
    
    // Simulate API call
    setTimeout(() => {
      if (kycMethod === "aadhaar" && formData.aadhaarNumber === "123456789012") {
        setVerificationStatus("error");
        toast({
          title: "Verification Failed",
          description: "Unable to verify Aadhaar details. Please check and try again.",
          variant: "destructive",
        });
      } else {
        setVerificationStatus("success");
        toast({
          title: "Verification Successful",
          description: "Your identity has been verified successfully!",
        });
        // Auto-proceed after success
        setTimeout(() => handleNextStep(), 1500);
      }
    }, 2000);
  };

  const handleSubmitKyc = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "KYC Completed",
        description: "Your KYC verification has been successfully submitted.",
      });
      navigate("/dashboard");
    }, 2000);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between items-center mb-8">
        {[...Array(totalSteps)].map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`rounded-full h-10 w-10 flex items-center justify-center mb-2
                  ${isActive ? "bg-app-primary-blue text-white" : 
                    isCompleted ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}
              >
                {isCompleted ? <CheckCircle className="h-5 w-5" /> : stepNumber}
              </div>
              <span className={`text-xs text-center 
                ${isActive ? "text-app-primary-blue font-medium" : 
                  isCompleted ? "text-green-500" : "text-gray-400"}`}>
                {stepNumber === 1 ? "Verification" : 
                 stepNumber === 2 ? "Personal" : 
                 stepNumber === 3 ? "Address" : "Financial"}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {currentStep === 1 ? (
        <div className="px-4 py-6 bg-white shadow-sm">
          <h1 className="text-xl font-bold text-app-gray-900">KYC Verification</h1>
          <p className="text-sm text-app-gray-900/70">Complete your KYC to start investing</p>
        </div>
      ) : (
        <div className="flex items-center px-4 py-6 bg-white shadow-sm">
          <button onClick={handlePrevStep} className="mr-4">
            <ChevronLeft className="h-5 w-5 text-app-gray-900" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-app-gray-900">KYC Verification</h1>
            <p className="text-sm text-app-gray-900/70">Step {currentStep} of {totalSteps}</p>
          </div>
        </div>
      )}

      <div className="container max-w-md mx-auto p-6">
        {renderStepIndicator()}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-bold text-app-gray-900 mb-6">Identity Verification</h2>
              
              <Tabs defaultValue="aadhaar" className="mb-8" onValueChange={(value) => setKycMethod(value as "aadhaar" | "pan")}>
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="aadhaar">Aadhaar</TabsTrigger>
                  <TabsTrigger value="pan">PAN Card</TabsTrigger>
                </TabsList>
                
                <TabsContent value="aadhaar" className="mt-6 space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="aadhaarNumber">Aadhaar Number</Label>
                    <Input
                      id="aadhaarNumber"
                      name="aadhaarNumber"
                      type="text" 
                      placeholder="12-digit Aadhaar number"
                      className="py-6 border-gray-200"
                      value={formData.aadhaarNumber}
                      onChange={handleInputChange}
                      disabled={verificationStatus === "verifying" || verificationStatus === "success"}
                    />
                    <p className="text-xs text-app-gray-900/70">We'll verify your identity with DigiLocker</p>
                  </div>

                  {verificationStatus === "error" && (
                    <Card className="border-red-200 bg-red-50">
                      <CardContent className="p-4 flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-red-700">Verification failed</p>
                          <p className="text-xs text-red-600">Please check your Aadhaar number and try again.</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {verificationStatus === "success" && (
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-4 flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-green-700">Verification successful</p>
                          <p className="text-xs text-green-600">Your Aadhaar has been verified successfully.</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="pan" className="mt-6 space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="panNumber">PAN Card Number</Label>
                    <Input
                      id="panNumber"
                      name="panNumber"
                      type="text" 
                      placeholder="10-character PAN number"
                      className="py-6 border-gray-200"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      disabled={verificationStatus === "verifying" || verificationStatus === "success"}
                    />
                    <p className="text-xs text-app-gray-900/70">Format: ABCDE1234F</p>
                  </div>

                  {verificationStatus === "error" && (
                    <Card className="border-red-200 bg-red-50">
                      <CardContent className="p-4 flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-red-700">Verification failed</p>
                          <p className="text-xs text-red-600">Please check your PAN number and try again.</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {verificationStatus === "success" && (
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-4 flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-green-700">Verification successful</p>
                          <p className="text-xs text-green-600">Your PAN has been verified successfully.</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>

              <Button
                onClick={handleVerifyKyc}
                className="w-full bg-app-primary-blue hover:bg-app-primary-blue/90 py-6 rounded-xl"
                disabled={verificationStatus === "verifying" || verificationStatus === "success" || (kycMethod === "aadhaar" && !formData.aadhaarNumber) || (kycMethod === "pan" && !formData.panNumber)}
              >
                {verificationStatus === "verifying" ? "Verifying..." : verificationStatus === "success" ? "Verified" : "Verify Identity"}
              </Button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-xl font-bold text-app-gray-900 mb-6">Personal Information</h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="fullName">Full Name (as per ID)</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 py-6 border-gray-200"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      className="pl-10 py-6 border-gray-200"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="gender">Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleSelectChange("gender", value)}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="cursor-pointer">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2 className="text-xl font-bold text-app-gray-900 mb-6">Address Information</h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="address">Complete Address</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Flat/House No., Street, Locality"
                    className="py-6 border-gray-200"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter city name"
                    className="py-6 border-gray-200"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="state">State</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => handleSelectChange("state", value)}
                  >
                    <SelectTrigger className="py-6 border-gray-200">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil_nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      {/* Add more states */}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    type="text"
                    placeholder="6-digit PIN code"
                    className="py-6 border-gray-200"
                    value={formData.pincode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <h2 className="text-xl font-bold text-app-gray-900 mb-6">Financial Information</h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Select
                    value={formData.occupation}
                    onValueChange={(value) => handleSelectChange("occupation", value)}
                  >
                    <SelectTrigger className="py-6 border-gray-200">
                      <SelectValue placeholder="Select occupation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salaried">Salaried</SelectItem>
                      <SelectItem value="self_employed">Self Employed</SelectItem>
                      <SelectItem value="business">Business Owner</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="homemaker">Homemaker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="annualIncome">Annual Income Range</Label>
                  <Select
                    value={formData.annualIncome}
                    onValueChange={(value) => handleSelectChange("annualIncome", value)}
                  >
                    <SelectTrigger className="py-6 border-gray-200">
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below_5l">Below ₹5 Lakhs</SelectItem>
                      <SelectItem value="5l_10l">₹5 Lakhs - ₹10 Lakhs</SelectItem>
                      <SelectItem value="10l_25l">₹10 Lakhs - ₹25 Lakhs</SelectItem>
                      <SelectItem value="25l_50l">₹25 Lakhs - ₹50 Lakhs</SelectItem>
                      <SelectItem value="above_50l">Above ₹50 Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Card className="border-amber-100 bg-amber-50">
                  <CardContent className="p-4 flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-amber-700">Important Note</p>
                      <p className="text-xs text-amber-600">
                        Your KYC information will be used to comply with financial regulations.
                        Please ensure all details are accurate.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          <div className="flex mt-8">
            {currentStep > 1 && (
              <Button
                onClick={handlePrevStep}
                variant="outline"
                className="flex-1 mr-2 py-6 border-gray-200"
              >
                Previous
              </Button>
            )}
            
            {currentStep < totalSteps ? (
              <Button
                onClick={handleNextStep}
                className={`bg-app-primary-blue hover:bg-app-primary-blue/90 py-6 rounded-xl ${currentStep === 1 ? "hidden" : "flex-1 ml-2"}`}
                disabled={(currentStep === 1 && verificationStatus !== "success")}
              >
                Continue
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmitKyc}
                className="flex-1 ml-2 bg-app-primary-blue hover:bg-app-primary-blue/90 py-6 rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Complete KYC"}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KycVerification;
