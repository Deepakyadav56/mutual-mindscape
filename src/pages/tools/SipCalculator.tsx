
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SipCalculator = () => {
  const navigate = useNavigate();
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [chartData, setChartData] = useState<any[]>([]);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const months = years * 12;
    const totalInvested = monthlyInvestment * months;
    
    const futureValue = monthlyInvestment * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
      (1 + monthlyRate);
    
    const wealthGained = futureValue - totalInvested;
    
    setTotalInvestment(totalInvested);
    setEstimatedReturns(wealthGained);
    setFutureValue(futureValue);
    
    generateChartData(monthlyInvestment, monthlyRate, months);
  };

  const generateChartData = (monthlyInvestment: number, monthlyRate: number, totalMonths: number) => {
    const data = [];
    let yearlyData = [];
    
    let currentInvestment = 0;
    let currentValue = 0;
    
    for (let month = 1; month <= totalMonths; month++) {
      currentInvestment += monthlyInvestment;
      currentValue = currentValue * (1 + monthlyRate) + monthlyInvestment;
      
      if (month % 12 === 0 || month === totalMonths) {
        const year = Math.ceil(month / 12);
        yearlyData.push({
          year,
          investment: Math.round(currentInvestment),
          expectedValue: Math.round(currentValue),
        });
      }
    }
    
    setChartData(yearlyData);
  };

  const handleMonthlyInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ''));
    if (!isNaN(value)) {
      setMonthlyInvestment(value);
    } else {
      setMonthlyInvestment(0);
    }
  };
  
  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, years, expectedReturn]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
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
        </div>
      </div>

      <div className="p-4 space-y-6">
        <Card className="bg-gradient-to-br from-app-primary-blue/5 to-app-primary-purple/5 border-0 shadow-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-app-gray-900">
                <h2 className="text-2xl font-bold">{formatCurrency(futureValue)}</h2>
                <p className="text-sm text-app-gray-900/70">Future Value</p>
              </div>
              <TrendingUp size={24} className="text-app-primary-blue" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <p className="text-sm text-app-gray-900/70">Total Investment</p>
                <p className="text-lg font-semibold text-app-gray-900">{formatCurrency(totalInvestment)}</p>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <p className="text-sm text-app-gray-900/70">Est. Returns</p>
                <p className="text-lg font-semibold text-app-primary-green">{formatCurrency(estimatedReturns)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="monthly-investment" className="text-app-gray-900">
                Monthly Investment
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-gray-900">₹</span>
                <Input
                  id="monthly-investment"
                  className="pl-8 w-32 text-right bg-white input-modern"
                  value={monthlyInvestment.toLocaleString()}
                  onChange={handleMonthlyInvestmentChange}
                />
              </div>
            </div>
            <Slider
              value={[monthlyInvestment]}
              min={500}
              max={100000}
              step={500}
              onValueChange={(values) => setMonthlyInvestment(values[0])}
              className="bg-app-light-blue rounded-full"
            />
            <div className="flex justify-between text-xs text-app-gray-900/70">
              <span>₹500</span>
              <span>₹50,000</span>
              <span>₹1,00,000</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="time-period" className="text-app-gray-900">
                Time Period (Years)
              </Label>
              <Input
                id="time-period"
                className="w-16 text-right bg-white input-modern"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value) || 1)}
              />
            </div>
            <Slider
              value={[years]}
              min={1}
              max={30}
              step={1}
              onValueChange={(values) => setYears(values[0])}
              className="bg-app-light-blue rounded-full"
            />
            <div className="flex justify-between text-xs text-app-gray-900/70">
              <span>1 Yr</span>
              <span>15 Yrs</span>
              <span>30 Yrs</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="expected-return" className="text-app-gray-900 flex items-center gap-1">
                Expected Return (% p.a.)
                <HelpCircle size={15} className="text-app-gray-300" />
              </Label>
              <Input
                id="expected-return"
                className="w-16 text-right bg-white input-modern"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(parseFloat(e.target.value) || 1)}
              />
            </div>
            <Slider
              value={[expectedReturn]}
              min={1}
              max={30}
              step={0.5}
              onValueChange={(values) => setExpectedReturn(values[0])}
              className="bg-app-light-blue rounded-full"
            />
            <div className="flex justify-between text-xs text-app-gray-900/70">
              <span>1%</span>
              <span>15%</span>
              <span>30%</span>
            </div>
          </div>
        </div>

        <div className="h-64 mt-6">
          <h3 className="text-lg font-semibold mb-4">Growth Projection</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="year" tickFormatter={(value) => `${value}Y`} />
              <YAxis tickFormatter={(value) => `₹${(value / 1000)}K`} />
              <Tooltip 
                formatter={(value) => formatCurrency(Number(value))}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Area
                type="monotone"
                dataKey="investment"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d840"
                name="Investment"
              />
              <Area
                type="monotone"
                dataKey="expectedValue"
                stackId="2"
                stroke="#00D09C"
                fill="#00D09C40"
                name="Expected Value"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2 mt-4">
          <p className="text-xs text-app-gray-900/70">
            * The calculated values are indicative and for illustration purposes only. 
            Actual returns may vary based on market conditions.
          </p>
          <p className="text-xs text-app-gray-900/70">
            * The calculator assumes that the investment is made at the beginning of each month.
          </p>
        </div>

        <Button 
          className="w-full btn-primary-modern"
          onClick={() => navigate('/explore')}
        >
          Start Investing
        </Button>
      </div>
    </div>
  );
};

export default SipCalculator;
