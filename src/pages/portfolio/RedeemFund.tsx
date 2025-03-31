
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Info, AlertCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const RedeemFund = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const [redeemType, setRedeemType] = useState("amount");
  const [amount, setAmount] = useState("");
  const [units, setUnits] = useState("");
  const [percentage, setPercentage] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Mock investment data (would be fetched based on fundId)
  const investment = {
    id: fundId || "1",
    name: "HDFC Mid-Cap Opportunities Fund",
    category: "Equity - Mid Cap",
    totalInvestment: 25000,
    currentValue: 27500,
    totalUnits: 250.345,
    nav: 109.85,
    navDate: "30 Aug 2023",
    growthRate: 10,
    absoluteReturns: 2500,
    profitLoss: "+₹2,500",
    sipDate: 15,
    exitLoad: "1% if redeemed within 1 year"
  };

  const handleRedeemTypeChange = (value: string) => {
    setRedeemType(value);
    setAmount("");
    setUnits("");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(value);
    
    // Calculate units based on amount
    if (value) {
      const calculatedUnits = parseFloat(value) / investment.nav;
      setUnits(calculatedUnits.toFixed(3));
    } else {
      setUnits("");
    }
  };

  const handleUnitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setUnits(value);
    
    // Calculate amount based on units
    if (value) {
      const calculatedAmount = parseFloat(value) * investment.nav;
      setAmount(calculatedAmount.toFixed(2));
    } else {
      setAmount("");
    }
  };

  const handlePercentageChange = (values: number[]) => {
    const percentValue = values[0];
    setPercentage(percentValue);
    
    // Calculate amount and units based on percentage
    const calculatedAmount = (percentValue / 100) * investment.currentValue;
    const calculatedUnits = calculatedAmount / investment.nav;
    
    setAmount(calculatedAmount.toFixed(2));
    setUnits(calculatedUnits.toFixed(3));
  };

  const isValidRedemption = () => {
    if (redeemType === "amount") {
      return amount !== "" && parseFloat(amount) > 0 && parseFloat(amount) <= investment.currentValue;
    } else if (redeemType === "units") {
      return units !== "" && parseFloat(units) > 0 && parseFloat(units) <= investment.totalUnits;
    } else {
      return percentage > 0 && percentage <= 100;
    }
  };

  const getEstimatedReturns = () => {
    if (!amount) return 0;
    const redemptionAmount = parseFloat(amount);
    const investmentPortion = (redemptionAmount / investment.currentValue) * investment.totalInvestment;
    return redemptionAmount - investmentPortion;
  };

  const handleRedeem = () => {
    if (!isValidRedemption()) {
      toast({
        title: "Invalid redemption",
        description: "Please enter a valid amount or units to redeem",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Redemption initiated",
        description: `Your redemption request for ${redeemType === "amount" ? `₹${parseFloat(amount).toLocaleString()}` : `${parseFloat(units).toFixed(3)} units`} has been received.`,
      });
      navigate("/portfolio");
    }, 1500);
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            Redeem Investment
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-app-gray-900 mb-1">{investment.name}</h2>
          <div className="flex items-center text-sm text-app-gray-900 opacity-80">
            <span>{investment.category}</span>
          </div>
          
          <Card className="mt-4 border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">Current Value</p>
                  <p className="font-semibold text-app-gray-900">₹{investment.currentValue.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">Total Units</p>
                  <p className="font-semibold text-app-gray-900">{investment.totalUnits.toFixed(3)}</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">NAV</p>
                  <p className="font-semibold text-app-gray-900">₹{investment.nav}</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">Returns</p>
                  <p className="font-semibold text-app-primary-green">{investment.profitLoss}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6 border-0 shadow-md">
          <CardContent className="p-4">
            <Tabs defaultValue="amount" onValueChange={handleRedeemTypeChange} value={redeemType}>
              <TabsList className="w-full grid grid-cols-3 mb-6 bg-app-light-blue">
                <TabsTrigger value="amount">By Amount</TabsTrigger>
                <TabsTrigger value="units">By Units</TabsTrigger>
                <TabsTrigger value="percentage">By Percentage</TabsTrigger>
              </TabsList>
              
              <TabsContent value="amount" className="space-y-4">
                <div>
                  <Label htmlFor="redeemAmount" className="text-app-gray-900 mb-2 block">Enter redemption amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-gray-900">₹</span>
                    <Input
                      id="redeemAmount"
                      className="pl-8 text-lg font-semibold bg-white input-modern"
                      placeholder="0.00"
                      value={amount}
                      onChange={handleAmountChange}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-app-gray-900 opacity-70">
                      Min: ₹1.00
                    </p>
                    <p className="text-xs text-app-gray-900 opacity-70">
                      Max: ₹{investment.currentValue.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-app-gray-50">
                  <p className="text-sm text-app-gray-900">
                    Estimated units to be redeemed:
                    <span className="font-semibold ml-1">{units ? parseFloat(units).toFixed(3) : "0.000"}</span>
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="units" className="space-y-4">
                <div>
                  <Label htmlFor="redeemUnits" className="text-app-gray-900 mb-2 block">Enter units to redeem</Label>
                  <Input
                    id="redeemUnits"
                    className="text-lg font-semibold bg-white input-modern"
                    placeholder="0.000"
                    value={units}
                    onChange={handleUnitsChange}
                  />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-app-gray-900 opacity-70">
                      Min: 0.001
                    </p>
                    <p className="text-xs text-app-gray-900 opacity-70">
                      Max: {investment.totalUnits.toFixed(3)}
                    </p>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-app-gray-50">
                  <p className="text-sm text-app-gray-900">
                    Estimated redemption amount:
                    <span className="font-semibold ml-1">₹{amount ? parseFloat(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}</span>
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="percentage" className="space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="redeemPercentage" className="text-app-gray-900">
                      Percentage to redeem
                    </Label>
                    <span className="text-lg font-semibold">{percentage}%</span>
                  </div>
                  
                  <Slider
                    value={[percentage]}
                    min={1}
                    max={100}
                    step={1}
                    onValueChange={handlePercentageChange}
                    className="mt-4 bg-app-light-blue rounded-full"
                  />
                  
                  <div className="flex justify-between text-xs text-app-gray-900 opacity-70 mt-1">
                    <span>1%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-app-gray-50 space-y-2">
                  <p className="text-sm text-app-gray-900">
                    Estimated redemption amount:
                    <span className="font-semibold ml-1">₹{amount ? parseFloat(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}</span>
                  </p>
                  <p className="text-sm text-app-gray-900">
                    Estimated units to be redeemed:
                    <span className="font-semibold ml-1">{units ? parseFloat(units).toFixed(3) : "0.000"}</span>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="mb-6 border-0 shadow-md">
          <CardContent className="p-4">
            <h3 className="font-semibold text-app-gray-900 mb-3">Redemption Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-app-gray-900 opacity-80">Redeemed Amount</span>
                <span className="font-medium">₹{amount ? parseFloat(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-app-gray-900 opacity-80">Units Redeemed</span>
                <span className="font-medium">{units ? parseFloat(units).toFixed(3) : "0.000"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-app-gray-900 opacity-80">Estimated Returns</span>
                <span className={`font-medium ${getEstimatedReturns() >= 0 ? "text-app-primary-green" : "text-red-500"}`}>
                  {getEstimatedReturns() >= 0 ? "+" : ""}₹{getEstimatedReturns().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-2">
                <div className="flex justify-between">
                  <span className="font-medium text-app-gray-900">Net Amount</span>
                  <span className="font-semibold">₹{amount ? parseFloat(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 border-0 shadow-md bg-app-gray-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-2">
              <Info className="h-5 w-5 text-app-gray-900 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-app-gray-900 mb-1">Important Information</h3>
                <ul className="text-sm text-app-gray-900 opacity-80 space-y-2 list-disc pl-4">
                  <li>The redemption amount will be credited to your registered bank account within 2-3 working days.</li>
                  <li>Exit load: {investment.exitLoad}</li>
                  <li>Short-term capital gains (held for less than 1 year) are taxed at 15%.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-gray-200 shadow-md max-w-lg mx-auto">
        <Button 
          onClick={handleRedeem} 
          className="w-full bg-app-primary-blue text-white py-6 rounded-xl"
          disabled={!isValidRedemption() || isProcessing}
        >
          {isProcessing ? "Processing..." : "Confirm Redemption"}
        </Button>
      </div>
    </div>
  );
};

export default RedeemFund;
