
import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Landmark, Wallet, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const PaymentConfirmation = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get data passed from previous screen
  const { fund, amount, investmentType, sipDate } = location.state || {
    fund: {
      id: fundId || "1",
      name: "HDFC Mid-Cap Opportunities Fund",
      category: "Equity - Mid Cap",
    },
    amount: 5000,
    investmentType: "sip",
    sipDate: 5
  };

  const handlePayNow = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      toast({
        title: "Payment Successful",
        description: "Your investment has been processed successfully",
        variant: "success"
      });
      
      navigate("/payment-success", { 
        state: { 
          fund,
          amount,
          investmentType,
          sipDate,
          transactionId: "TXN" + Math.floor(Math.random() * 1000000000)
        } 
      });
    }, 2000);
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-app-mint z-10">
        <div className="flex items-center p-4 border-b border-app-light-mint">
          <button onClick={() => navigate(-1)} className="text-app-charcoal">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-charcoal ml-4">
            Payment
          </h1>
        </div>
      </div>

      <div className="p-4">
        <Card className="mb-6 border-app-light-mint">
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-app-charcoal mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-app-charcoal">Fund</span>
                <span className="text-sm font-medium text-app-charcoal">{fund.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-app-charcoal">Category</span>
                <span className="text-sm font-medium text-app-charcoal">{fund.category}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-app-charcoal">Investment Type</span>
                <span className="text-sm font-medium text-app-charcoal">
                  {investmentType === "sip" ? "SIP" : "One-time"}
                </span>
              </div>
              {investmentType === "sip" && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-app-charcoal">SIP Date</span>
                  <span className="text-sm font-medium text-app-charcoal">{sipDate}th of every month</span>
                </div>
              )}
            </div>
            
            <div className="border-t border-app-light-mint pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-app-charcoal">Total Amount</span>
                <span className="text-lg font-bold text-app-charcoal">₹{amount.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 border-app-light-mint">
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-app-charcoal mb-4">Select Payment Method</h2>
            
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
              <div className={`flex items-center p-3 rounded-lg border ${
                paymentMethod === "upi" ? "border-app-charcoal bg-app-light-mint" : "border-app-light-mint"
              }`}>
                <RadioGroupItem value="upi" id="upi" className="sr-only" />
                <Label htmlFor="upi" className="flex items-center w-full cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Wallet className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-app-charcoal">UPI</p>
                    <p className="text-xs text-app-charcoal opacity-70">Pay using any UPI app</p>
                  </div>
                  {paymentMethod === "upi" && (
                    <Check className="h-5 w-5 text-app-charcoal" />
                  )}
                </Label>
              </div>
              
              <div className={`flex items-center p-3 rounded-lg border ${
                paymentMethod === "netbanking" ? "border-app-charcoal bg-app-light-mint" : "border-app-light-mint"
              }`}>
                <RadioGroupItem value="netbanking" id="netbanking" className="sr-only" />
                <Label htmlFor="netbanking" className="flex items-center w-full cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Landmark className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-app-charcoal">Net Banking</p>
                    <p className="text-xs text-app-charcoal opacity-70">All Indian banks supported</p>
                  </div>
                  {paymentMethod === "netbanking" && (
                    <Check className="h-5 w-5 text-app-charcoal" />
                  )}
                </Label>
              </div>
              
              <div className={`flex items-center p-3 rounded-lg border ${
                paymentMethod === "card" ? "border-app-charcoal bg-app-light-mint" : "border-app-light-mint"
              }`}>
                <RadioGroupItem value="card" id="card" className="sr-only" />
                <Label htmlFor="card" className="flex items-center w-full cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-app-charcoal">Credit/Debit Card</p>
                    <p className="text-xs text-app-charcoal opacity-70">Visa, Mastercard, RuPay</p>
                  </div>
                  {paymentMethod === "card" && (
                    <Check className="h-5 w-5 text-app-charcoal" />
                  )}
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="text-xs text-app-charcoal opacity-70 text-center px-4 mb-6">
          By proceeding, you agree to the Terms & Conditions and confirm that you have read the Scheme Information Document.
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-light-mint">
        <Button 
          onClick={handlePayNow} 
          className="w-full bg-app-charcoal text-app-mint py-6 rounded-full"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : `Pay ₹${amount.toLocaleString()}`}
        </Button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
