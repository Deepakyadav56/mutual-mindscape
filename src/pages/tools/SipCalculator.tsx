
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, 
  Calculator, 
  Info, 
  ChevronRight, 
  HelpCircle,
  Share2
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from "recharts";
import { useToast } from "@/hooks/use-toast";

const SipCalculator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // SIP parameters
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [years, setYears] = useState<number>(10);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [investmentFrequency, setInvestmentFrequency] = useState<string>("monthly");
  
  // Calculated results
  const [totalInvestment, setTotalInvestment] = useState<number>(0);
  const [estimatedReturns, setEstimatedReturns] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);

  // Calculate SIP returns
  useEffect(() => {
    // Convert yearly rate to monthly rate
    const monthlyRate = expectedReturn / 12 / 100;
    const totalMonths = years * 12;
    
    // Adjust investment amount based on frequency
    let adjustedMonthlyInvestment = monthlyInvestment;
    if (investmentFrequency === "quarterly") {
      adjustedMonthlyInvestment = monthlyInvestment * 3 / 12;
    } else if (investmentFrequency === "yearly") {
      adjustedMonthlyInvestment = monthlyInvestment * 12 / 12;
    }
    
    // Formula: A = P × ({[1 + i]^n – 1} / i) × (1 + i)
    // A is final amount, P is investment amount, i is interest rate, n is number of periods
    const invested = adjustedMonthlyInvestment * totalMonths;
    const futureValue = adjustedMonthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
    
    setTotalInvestment(invested);
    setEstimatedReturns(futureValue - invested);
    setTotalValue(futureValue);
    
    // Generate chart data
    const data = [];
    for (let year = 0; year <= years; year++) {
      const months = year * 12;
      const yearlyInvested = adjustedMonthlyInvestment * months;
      const yearlyFutureValue = months === 0 ? 0 : adjustedMonthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      
      data.push({
        year: `Year ${year}`,
        invested: Math.round(yearlyInvested),
        projectedValue: Math.round(yearlyFutureValue),
      });
    }
    setChartData(data);
  }, [monthlyInvestment, years, expectedReturn, investmentFrequency]);

  const handleShareResults = () => {
    toast({
      title: "Share Feature",
      description: "This feature will allow sharing SIP calculation results with others",
      duration: 3000,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            SIP Calculator
          </h1>
          <div className="flex-1"></div>
          <button onClick={handleShareResults} className="text-app-gray-900">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-app-light-mint p-4 rounded-xl"
        >
          <div className="flex items-start">
            <Calculator className="h-6 w-6 text-app-primary-green mr-3 mt-0.5" />
            <div>
              <h2 className="font-medium text-gray-800">SIP Calculator</h2>
              <p className="text-sm text-gray-600">
                Plan your investments and visualize future returns with our SIP Calculator
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Investment
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
            <Input
              type="number"
              min="500"
              max="500000"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="pl-8"
            />
          </div>
          <Slider
            value={[monthlyInvestment]}
            min={500}
            max={100000}
            step={500}
            onValueChange={(value) => setMonthlyInvestment(value[0])}
            className="mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investment Period (Years)
          </label>
          <Input
            type="number"
            min="1"
            max="40"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
          <Slider
            value={[years]}
            min={1}
            max={40}
            step={1}
            onValueChange={(value) => setYears(value[0])}
            className="mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expected Return (% p.a.)
          </label>
          <Input
            type="number"
            min="1"
            max="30"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
          />
          <Slider
            value={[expectedReturn]}
            min={1}
            max={30}
            step={0.5}
            onValueChange={(value) => setExpectedReturn(value[0])}
            className="mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investment Frequency
          </label>
          <Select
            value={investmentFrequency}
            onValueChange={setInvestmentFrequency}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border overflow-hidden"
        >
          <div className="p-4 bg-app-gray-50 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">Calculation Results</h2>
            <button className="text-app-gray-500">
              <HelpCircle className="h-4 w-4" />
            </button>
          </div>
          
          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Total Investment</span>
              <span className="font-semibold">{formatCurrency(totalInvestment)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Estimated Returns</span>
              <span className="font-semibold text-app-primary-green">{formatCurrency(estimatedReturns)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Value</span>
              <span className="font-bold text-lg">{formatCurrency(totalValue)}</span>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-medium mb-4 text-gray-800">Growth Projection</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 15 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 10 }} 
                    interval={Math.ceil(years / 5)}
                  />
                  <YAxis 
                    tickFormatter={(value) => `₹${value/1000}K`}
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, ``]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <ReferenceLine 
                    y={totalInvestment} 
                    stroke="#888" 
                    strokeDasharray="3 3" 
                    label={{ value: "Investment", position: "insideBottomLeft", fontSize: 10 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="invested"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                    name="Total Investment"
                  />
                  <Line
                    type="monotone"
                    dataKey="projectedValue"
                    stroke="#00D09C"
                    strokeWidth={2}
                    dot={false}
                    name="Projected Value"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col gap-3">
          <Button 
            className="w-full bg-app-primary-green hover:bg-app-green/90" 
            onClick={() => navigate('/explore')}
          >
            Explore Mutual Funds to Invest
          </Button>
        </div>

        <div className="mt-4 p-4 bg-app-light-blue rounded-xl">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-app-primary-blue mr-3 mt-0.5" />
            <p className="text-sm text-gray-600">
              The above calculation is an estimate based on a fixed rate of return. 
              Actual returns may vary based on market conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SipCalculator;
