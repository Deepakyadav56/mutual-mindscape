
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Info } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const InvestFund = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const [investmentType, setInvestmentType] = useState("sip");
  const [amount, setAmount] = useState("");
  const [sipDate, setSipDate] = useState("1");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Mock fund data (would be fetched based on fundId)
  const fund = {
    id: fundId || "1",
    name: "HDFC Mid-Cap Opportunities Fund",
    category: "Equity - Mid Cap",
    riskLevel: "Moderate to High",
    minInvestment: 500,
    minSIP: 500,
    nav: "₹98.75",
    navDate: "30 Aug 2023"
  };

  const handleInvestmentTypeChange = (value: string) => {
    setInvestmentType(value);
    setAmount("");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const getQuickAmounts = () => {
    const baseAmount = investmentType === "sip" ? fund.minSIP : fund.minInvestment;
    return [
      baseAmount,
      baseAmount * 2,
      baseAmount * 5,
      baseAmount * 10
    ];
  };

  const isValidAmount = () => {
    const minAmount = investmentType === "sip" ? fund.minSIP : fund.minInvestment;
    return amount !== "" && Number(amount) >= minAmount;
  };

  const handleContinue = () => {
    if (!isValidAmount()) {
      toast({
        title: "Invalid amount",
        description: `Please enter an amount greater than or equal to ₹${investmentType === "sip" ? fund.minSIP : fund.minInvestment}`,
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      navigate(`/invest/${fundId}/payment`, { 
        state: { 
          fund,
          amount: Number(amount),
          investmentType,
          sipDate: investmentType === "sip" ? sipDate : null
        } 
      });
    }, 1000);
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-app-mint z-10">
        <div className="flex items-center p-4 border-b border-app-light-mint">
          <button onClick={() => navigate(-1)} className="text-app-charcoal">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-charcoal ml-4">
            Invest
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-app-charcoal mb-1">{fund.name}</h2>
          <div className="flex items-center text-sm text-app-charcoal opacity-80">
            <span>{fund.category}</span>
            <span className="mx-2">•</span>
            <span>{fund.riskLevel}</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <div>
              <p className="text-xs text-app-charcoal opacity-70">NAV</p>
              <p className="font-medium text-app-charcoal">{fund.nav}</p>
            </div>
            <div>
              <p className="text-xs text-app-charcoal opacity-70">NAV Date</p>
              <p className="font-medium text-app-charcoal">{fund.navDate}</p>
            </div>
          </div>
        </div>

        <Card className="mb-6 border-app-light-mint">
          <CardContent className="p-4">
            <Tabs defaultValue="sip" onValueChange={handleInvestmentTypeChange} value={investmentType}>
              <TabsList className="w-full grid grid-cols-2 mb-6 bg-app-light-mint">
                <TabsTrigger value="sip">SIP</TabsTrigger>
                <TabsTrigger value="lumpsum">One-time</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sip" className="space-y-4">
                <div>
                  <Label htmlFor="sipAmount" className="text-app-charcoal mb-2 block">Enter monthly SIP amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-charcoal">₹</span>
                    <Input
                      id="sipAmount"
                      className="pl-8 text-lg font-semibold bg-white input-field"
                      placeholder={`${fund.minSIP}`}
                      value={amount}
                      onChange={handleAmountChange}
                    />
                  </div>
                  <p className="text-xs text-app-charcoal opacity-70 mt-1">
                    Minimum SIP amount: ₹{fund.minSIP}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {getQuickAmounts().map((quickAmount) => (
                    <button
                      key={quickAmount}
                      onClick={() => setAmount(quickAmount.toString())}
                      className={`px-4 py-2 rounded-full text-sm ${
                        amount === quickAmount.toString()
                          ? "bg-app-charcoal text-app-mint"
                          : "bg-app-light-mint text-app-charcoal"
                      }`}
                    >
                      ₹{quickAmount.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                <div className="mt-4">
                  <Label htmlFor="sipDate" className="text-app-charcoal mb-2 block">SIP Date</Label>
                  <RadioGroup 
                    value={sipDate} 
                    onValueChange={setSipDate}
                    className="grid grid-cols-5 gap-2"
                  >
                    {[1, 5, 10, 15, 20].map((date) => (
                      <div key={date} className="flex items-center space-x-1">
                        <RadioGroupItem 
                          value={date.toString()} 
                          id={`date-${date}`} 
                          className="sr-only"
                        />
                        <Label 
                          htmlFor={`date-${date}`}
                          className={`flex items-center justify-center w-full h-10 rounded-full cursor-pointer ${
                            sipDate === date.toString() 
                              ? "bg-app-charcoal text-app-mint" 
                              : "bg-app-light-mint text-app-charcoal"
                          }`}
                        >
                          {date}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <p className="text-xs text-app-charcoal opacity-70 mt-1">
                    First SIP will be debited on {new Date().getDate() > Number(sipDate) 
                      ? new Date(new Date().getFullYear(), new Date().getMonth() + 1, Number(sipDate)).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                      : new Date(new Date().getFullYear(), new Date().getMonth(), Number(sipDate)).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                    }
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="lumpsum" className="space-y-4">
                <div>
                  <Label htmlFor="lumpsumAmount" className="text-app-charcoal mb-2 block">Enter one-time investment amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-charcoal">₹</span>
                    <Input
                      id="lumpsumAmount"
                      className="pl-8 text-lg font-semibold bg-white input-field"
                      placeholder={`${fund.minInvestment}`}
                      value={amount}
                      onChange={handleAmountChange}
                    />
                  </div>
                  <p className="text-xs text-app-charcoal opacity-70 mt-1">
                    Minimum investment amount: ₹{fund.minInvestment}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {getQuickAmounts().map((quickAmount) => (
                    <button
                      key={quickAmount}
                      onClick={() => setAmount(quickAmount.toString())}
                      className={`px-4 py-2 rounded-full text-sm ${
                        amount === quickAmount.toString()
                          ? "bg-app-charcoal text-app-mint"
                          : "bg-app-light-mint text-app-charcoal"
                      }`}
                    >
                      ₹{quickAmount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="mb-6 border-app-light-mint">
          <CardContent className="p-4">
            <div className="flex items-start space-x-2">
              <Info className="h-5 w-5 text-app-charcoal shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-app-charcoal mb-1">Important Information</h3>
                <ul className="text-sm text-app-charcoal opacity-80 space-y-2 list-disc pl-4">
                  <li>NAV applicable will be the NAV of the date on which your payment is realized.</li>
                  <li>Redemption of funds typically takes 2-3 working days.</li>
                  <li>SIP investments can be modified or canceled 7 days before the next installment.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-light-mint">
        <Button 
          onClick={handleContinue} 
          className="w-full bg-app-charcoal text-app-mint py-6 rounded-full"
          disabled={!isValidAmount() || isProcessing}
        >
          {isProcessing ? "Processing..." : `Continue to pay${amount ? ` ₹${Number(amount).toLocaleString()}` : ""}`}
        </Button>
      </div>
    </div>
  );
};

export default InvestFund;
