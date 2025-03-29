
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, ArrowDownToLine } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get data passed from previous screen
  const { fund, amount, investmentType, sipDate, transactionId } = location.state || {
    fund: {
      name: "HDFC Mid-Cap Opportunities Fund",
      category: "Equity - Mid Cap",
    },
    amount: 5000,
    investmentType: "sip",
    sipDate: 5,
    transactionId: "TXN123456789"
  };

  const formattedDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen bg-app-mint p-4 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-app-charcoal mb-1">Payment Successful</h1>
          <p className="text-sm text-app-charcoal opacity-80">Your investment is confirmed</p>
        </div>
        
        <Card className="w-full max-w-md border-app-light-mint mb-6">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-app-charcoal opacity-70">Fund</p>
                <p className="font-medium text-app-charcoal">{fund.name}</p>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-app-charcoal opacity-70">Amount</p>
                  <p className="font-semibold text-app-charcoal">₹{amount.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-app-charcoal opacity-70">Investment Type</p>
                  <p className="font-medium text-app-charcoal">
                    {investmentType === "sip" ? `SIP (${sipDate}th of every month)` : "One-time"}
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-app-light-mint flex justify-between">
                <div>
                  <p className="text-xs text-app-charcoal opacity-70">Transaction ID</p>
                  <p className="font-medium text-app-charcoal">{transactionId}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-app-charcoal opacity-70">Date & Time</p>
                  <p className="font-medium text-app-charcoal">{formattedDate}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Button 
          variant="outline" 
          className="flex items-center space-x-2 bg-white border-app-light-mint text-app-charcoal mb-4"
        >
          <ArrowDownToLine className="h-4 w-4" />
          <span>Download Receipt</span>
        </Button>
        
        <div className="text-xs text-app-charcoal opacity-70 text-center mb-6">
          {investmentType === "sip" 
            ? "Your SIP has been set up successfully. The first installment has been processed." 
            : "Your one-time investment has been processed. It will be reflected in your portfolio soon."}
        </div>
      </div>
      
      <div className="flex flex-col space-y-3">
        <Button 
          onClick={() => navigate("/portfolio")} 
          className="bg-app-charcoal text-app-mint py-6 rounded-full"
        >
          View Portfolio
        </Button>
        <Button 
          onClick={() => navigate("/dashboard")} 
          variant="outline"
          className="border-app-charcoal text-app-charcoal py-6 rounded-full"
        >
          <Home className="h-4 w-4 mr-2" />
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
