
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const TaxCalculator = () => {
  const navigate = useNavigate();
  const [taxableIncome, setTaxableIncome] = useState(1000000);
  const [taxRegime, setTaxRegime] = useState("new");
  const [elssInvestment, setElssInvestment] = useState(150000);
  const [taxWithoutELSS, setTaxWithoutELSS] = useState(0);
  const [taxWithELSS, setTaxWithELSS] = useState(0);
  const [taxSaved, setTaxSaved] = useState(0);

  useEffect(() => {
    // Calculate tax based on selected regime
    calculateTax();
  }, [taxableIncome, taxRegime, elssInvestment]);

  const calculateTax = () => {
    let taxWithout = 0;
    let taxWith = 0;

    if (taxRegime === "old") {
      // Old regime calculation with 80C deduction
      const deductibleIncome = Math.max(0, taxableIncome - (elssInvestment > 150000 ? 150000 : elssInvestment));
      
      // Without ELSS
      taxWithout = calculateOldRegimeTax(taxableIncome);
      
      // With ELSS
      taxWith = calculateOldRegimeTax(deductibleIncome);
    } else {
      // New regime calculation (no deductions)
      taxWithout = calculateNewRegimeTax(taxableIncome);
      taxWith = taxWithout; // No change since deductions don't apply
    }

    setTaxWithoutELSS(Math.round(taxWithout));
    setTaxWithELSS(Math.round(taxWith));
    setTaxSaved(Math.round(taxWithout - taxWith));
  };

  const calculateOldRegimeTax = (income: number) => {
    let tax = 0;
    
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.2;
    } else {
      tax = 112500 + (income - 1000000) * 0.3;
    }
    
    // Add cess
    tax += tax * 0.04;
    
    return tax;
  };

  const calculateNewRegimeTax = (income: number) => {
    let tax = 0;
    
    if (income <= 300000) {
      tax = 0;
    } else if (income <= 600000) {
      tax = (income - 300000) * 0.05;
    } else if (income <= 900000) {
      tax = 15000 + (income - 600000) * 0.1;
    } else if (income <= 1200000) {
      tax = 45000 + (income - 900000) * 0.15;
    } else if (income <= 1500000) {
      tax = 90000 + (income - 1200000) * 0.2;
    } else {
      tax = 150000 + (income - 1500000) * 0.3;
    }
    
    // Add cess
    tax += tax * 0.04;
    
    return tax;
  };

  return (
    <div className="min-h-screen bg-app-gray-50 pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft className="h-5 w-5 text-app-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-app-gray-900">Tax Savings Calculator</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-app-light-blue mx-auto mb-4">
                <Calculator className="h-6 w-6 text-app-primary-blue" />
              </div>
              <h2 className="text-lg font-semibold text-center mb-6">
                Calculate your tax savings with ELSS investments
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label htmlFor="income" className="text-base">
                      Annual Taxable Income
                    </Label>
                    <div className="font-medium">₹{taxableIncome.toLocaleString()}</div>
                  </div>
                  <Slider
                    id="income"
                    min={500000}
                    max={5000000}
                    step={50000}
                    value={[taxableIncome]}
                    onValueChange={(value) => setTaxableIncome(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-app-gray-900/70">
                    <div>₹5L</div>
                    <div>₹50L</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="regime" className="text-base">
                    Tax Regime
                  </Label>
                  <Select value={taxRegime} onValueChange={setTaxRegime}>
                    <SelectTrigger className="w-full py-6">
                      <SelectValue placeholder="Select tax regime" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="old">Old Regime (with deductions)</SelectItem>
                      <SelectItem value="new">New Regime (without deductions)</SelectItem>
                    </SelectContent>
                  </Select>
                  {taxRegime === "new" && (
                    <div className="text-sm text-app-primary-blue/90 bg-app-light-blue p-3 rounded-lg">
                      Note: ELSS investments do not provide tax benefits under the new tax regime.
                    </div>
                  )}
                </div>
                
                {taxRegime === "old" && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="elss" className="text-base flex items-center">
                        ELSS Investment Amount
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 ml-1 text-app-gray-900/50" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                ELSS investments can be claimed as deduction under Section 80C
                                up to a maximum of ₹1,50,000 per financial year.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <div className="font-medium">₹{elssInvestment.toLocaleString()}</div>
                    </div>
                    <Slider
                      id="elss"
                      min={0}
                      max={200000}
                      step={5000}
                      value={[elssInvestment]}
                      onValueChange={(value) => setElssInvestment(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-app-gray-900/70">
                      <div>₹0</div>
                      <div>₹2L</div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-0 shadow-md">
            <div className="bg-app-primary-blue text-white p-4">
              <h3 className="text-lg font-medium">Your Tax Calculation</h3>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-app-gray-900/70">Tax without ELSS</p>
                  <p className="text-lg font-semibold">₹{taxWithoutELSS.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-app-gray-900/70">Tax with ELSS</p>
                  <p className="text-lg font-semibold">₹{taxWithELSS.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-app-light-green p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-app-gray-900">Tax saved with ELSS</p>
                  <p className="text-xl font-bold text-app-primary-green">
                    ₹{taxSaved.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-app-gray-900/70">Effective returns</p>
                  <p className="font-medium">
                    {elssInvestment > 0 
                      ? `${((taxSaved / elssInvestment) * 100).toFixed(1)}%` 
                      : "0%"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="pt-4">
          <Button 
            onClick={() => navigate("/explore/tax-saver-funds")}
            className="w-full bg-app-primary-green hover:bg-app-primary-green/90 py-6 rounded-xl"
          >
            Explore ELSS Funds
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
