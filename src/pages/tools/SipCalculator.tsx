
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calculator, ArrowLeft, Info, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SipCalculator = () => {
  const navigate = useNavigate();
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const calculateSIP = () => {
    // Calculate monthly interest rate (r)
    const monthlyRate = expectedReturn / 100 / 12;
    
    // Calculate number of months (n)
    const months = timePeriod * 12;
    
    // Calculate total investment
    const invested = monthlyInvestment * months;
    
    // Calculate future value using SIP formula: M × (((1 + r)^n - 1) / r) × (1 + r)
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    // Calculate estimated returns
    const returns = futureValue - invested;
    
    setTotalInvestment(invested);
    setEstimatedReturns(returns);
    setTotalValue(futureValue);
    
    // Generate chart data
    generateChartData(monthlyInvestment, monthlyRate, months);
  };
  
  const generateChartData = (monthly: number, rate: number, months: number) => {
    const data = [];
    let invested = 0;
    let value = 0;
    
    // Generate data for each year
    for (let i = 0; i <= timePeriod; i++) {
      const currentMonths = i * 12;
      
      if (i > 0) {
        invested = monthly * currentMonths;
        value = monthly * (((Math.pow(1 + rate, currentMonths) - 1) / rate) * (1 + rate));
      }
      
      data.push({
        year: i,
        investment: Math.round(invested),
        value: Math.round(value),
      });
    }
    
    setChartData(data);
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} Lac`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(2)}k`;
    } else {
      return `₹${value.toFixed(0)}`;
    }
  };

  const handleSliderChange = (field: string, value: number[]) => {
    switch (field) {
      case "monthlyInvestment":
        setMonthlyInvestment(value[0]);
        break;
      case "expectedReturn":
        setExpectedReturn(value[0]);
        break;
      case "timePeriod":
        setTimePeriod(value[0]);
        break;
    }
  };

  const handleInputChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    const value = parseInt(rawValue);
    
    if (!isNaN(value)) {
      switch (field) {
        case "monthlyInvestment":
          setMonthlyInvestment(Math.min(Math.max(value, 500), 200000));
          break;
        case "expectedReturn":
          setExpectedReturn(Math.min(Math.max(value, 1), 30));
          break;
        case "timePeriod":
          setTimePeriod(Math.min(Math.max(value, 1), 40));
          break;
      }
    }
  };

  const handleShareResult = () => {
    toast({
      title: "Results Copied!",
      description: `An investment of ₹${monthlyInvestment.toLocaleString()} monthly for ${timePeriod} years at ${expectedReturn}% returns would grow to ₹${Math.round(totalValue).toLocaleString()}.`,
    });
  };

  return (
    <div className="pb-20 bg-app-groww-bg-dark">
      <div className="sticky top-0 bg-app-groww-bg-dark z-10 border-b border-app-groww-border-dark">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="text-white">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-medium text-white ml-4 flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-app-groww-green" />
            SIP Calculator
          </h1>
        </div>
      </div>

      <div className="p-4">
        {/* Results Card */}
        <Card className="mb-6 border-0 bg-app-groww-card-dark">
          <CardContent className="p-5">
            <h2 className="text-lg font-medium text-white mb-4">SIP Results</h2>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-app-groww-text-secondary mb-1">Invested Amount</p>
                <p className="text-xl font-medium text-white">₹{Math.round(totalInvestment).toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-app-groww-text-secondary mb-1">Est. Returns</p>
                <p className="text-xl font-medium text-app-groww-green">₹{Math.round(estimatedReturns).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="p-4 bg-app-groww-bg-dark rounded-lg text-center mb-3">
              <p className="text-sm text-app-groww-text-secondary mb-1">Total Value</p>
              <p className="text-2xl font-semibold text-white">₹{Math.round(totalValue).toLocaleString()}</p>
            </div>
            
            <div className="flex items-center justify-center">
              <Button 
                className="text-sm bg-app-groww-green text-black px-4 py-2 rounded-full"
                onClick={handleShareResult}
              >
                Share Results
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Chart */}
        <Card className="mb-6 border-0 bg-app-groww-card-dark">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-white">Growth Chart</h2>
              <TrendingUp className="h-5 w-5 text-app-groww-green" />
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5367FF" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#5367FF" stopOpacity={0.2} />
                    </linearGradient>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00D09C" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#00D09C" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2D2D2D" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: '#A0A0A0', fontSize: 12 }} 
                    axisLine={{ stroke: '#2D2D2D' }}
                  />
                  <YAxis 
                    tickFormatter={formatCurrency} 
                    tick={{ fill: '#A0A0A0', fontSize: 12 }} 
                    axisLine={{ stroke: '#2D2D2D' }}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`₹${value.toLocaleString()}`, '']}
                    contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #2D2D2D', borderRadius: '0.5rem' }}
                    itemStyle={{ color: '#FFFFFF' }}
                    labelStyle={{ color: '#A0A0A0' }}
                    labelFormatter={(year) => `Year ${year}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="investment" 
                    stroke="#5367FF" 
                    fillOpacity={1} 
                    fill="url(#colorInvestment)" 
                    name="Investment"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00D09C" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    name="Total Value"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="flex items-center mr-4">
                <div className="w-3 h-3 bg-app-groww-blue rounded-full mr-1"></div>
                <span className="text-xs text-app-groww-text-secondary">Investment</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-app-groww-green rounded-full mr-1"></div>
                <span className="text-xs text-app-groww-text-secondary">Total Value</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* SIP Parameters */}
        <Card className="mb-6 border-0 bg-app-groww-card-dark">
          <CardContent className="p-5">
            <h2 className="text-lg font-medium text-white mb-4">SIP Parameters</h2>
            
            {/* Monthly Investment */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="monthly-investment" className="text-sm text-app-groww-text-secondary">
                  Monthly Investment (₹)
                </Label>
                <div className="relative">
                  <Input
                    id="monthly-investment"
                    className="w-28 pl-6 pr-2 py-1 text-right text-white bg-app-groww-bg-dark border-app-groww-border-dark"
                    value={monthlyInvestment.toLocaleString()}
                    onChange={(e) => handleInputChange("monthlyInvestment", e)}
                  />
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-app-groww-text-secondary">₹</span>
                </div>
              </div>
              
              <Slider
                value={[monthlyInvestment]}
                min={500}
                max={200000}
                step={500}
                onValueChange={(value) => handleSliderChange("monthlyInvestment", value)}
                className="mt-3"
              />
              
              <div className="flex justify-between mt-1 text-xs text-app-groww-text-secondary">
                <span>₹500</span>
                <span>₹1,00,000</span>
                <span>₹2,00,000</span>
              </div>
            </div>
            
            {/* Expected Return */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="expected-return" className="text-sm text-app-groww-text-secondary">
                  Expected Return Rate (% p.a.)
                </Label>
                <div className="relative">
                  <Input
                    id="expected-return"
                    className="w-28 pl-2 pr-6 py-1 text-right text-white bg-app-groww-bg-dark border-app-groww-border-dark"
                    value={expectedReturn}
                    onChange={(e) => handleInputChange("expectedReturn", e)}
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-app-groww-text-secondary">%</span>
                </div>
              </div>
              
              <Slider
                value={[expectedReturn]}
                min={1}
                max={30}
                step={0.5}
                onValueChange={(value) => handleSliderChange("expectedReturn", value)}
                className="mt-3"
              />
              
              <div className="flex justify-between mt-1 text-xs text-app-groww-text-secondary">
                <span>1%</span>
                <span>15%</span>
                <span>30%</span>
              </div>
            </div>
            
            {/* Time Period */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="time-period" className="text-sm text-app-groww-text-secondary">
                  Time Period (Years)
                </Label>
                <div className="relative">
                  <Input
                    id="time-period"
                    className="w-28 pl-2 pr-6 py-1 text-right text-white bg-app-groww-bg-dark border-app-groww-border-dark"
                    value={timePeriod}
                    onChange={(e) => handleInputChange("timePeriod", e)}
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-app-groww-text-secondary">yrs</span>
                </div>
              </div>
              
              <Slider
                value={[timePeriod]}
                min={1}
                max={40}
                step={1}
                onValueChange={(value) => handleSliderChange("timePeriod", value)}
                className="mt-3"
              />
              
              <div className="flex justify-between mt-1 text-xs text-app-groww-text-secondary">
                <span>1 yr</span>
                <span>20 yrs</span>
                <span>40 yrs</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* How SIP Calculator Works */}
        <Card className="mb-6 border-0 bg-app-groww-card-dark">
          <CardContent className="p-5">
            <div className="flex items-start mb-3">
              <Info className="h-5 w-5 text-app-groww-blue mt-0.5 mr-2" />
              <h2 className="text-lg font-medium text-white">How SIP Calculator Works</h2>
            </div>
            
            <div className="space-y-3 text-app-groww-text-secondary text-sm">
              <p>
                This SIP calculator uses the standard SIP formula to calculate returns on your monthly investments:
              </p>
              <div className="p-3 bg-app-groww-bg-dark rounded-lg text-center">
                <p className="text-white">M × (((1 + r)^n - 1) / r) × (1 + r)</p>
              </div>
              <p>
                Where M is the monthly investment amount, r is the monthly interest rate (annual rate ÷ 12), and n is the number of months.
              </p>
              <p>
                The calculator assumes that your investments will yield the same return rate throughout the investment period.
              </p>
              <p>
                Remember that actual returns may vary based on market conditions and fund performance.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Start SIP Button */}
        <Button 
          className="w-full bg-app-groww-green text-black font-medium py-3 rounded-full"
          onClick={() => navigate("/explore")}
        >
          Start SIP Now
        </Button>
      </div>
    </div>
  );
};

export default SipCalculator;
