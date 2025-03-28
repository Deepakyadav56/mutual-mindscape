
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  // Mock data for portfolio value
  const portfolioValue = 125750.75;
  const returnPercentage = 12.4;
  const isPositiveReturn = returnPercentage > 0;
  
  // Mock data for funds
  const topFunds = [
    {
      id: 1,
      name: "HDFC Mid-Cap Opportunities",
      category: "Equity",
      returnPercentage: 15.8,
      aum: "₹26,293 Cr",
    },
    {
      id: 2,
      name: "SBI Blue Chip Fund",
      category: "Equity",
      returnPercentage: 12.3,
      aum: "₹30,123 Cr",
    },
    {
      id: 3,
      name: "Axis Long Term Equity Fund",
      category: "ELSS",
      returnPercentage: 14.5,
      aum: "₹29,675 Cr",
    },
  ];

  // Mock data for recent investments
  const recentInvestments = [
    {
      id: 1,
      name: "Kotak Emerging Equity Fund",
      date: "Jun 15, 2023",
      amount: 15000,
      type: "SIP",
    },
    {
      id: 2,
      name: "Aditya Birla Sun Life Tax Relief 96",
      date: "May 21, 2023",
      amount: 25000,
      type: "One-time",
    },
  ];

  return (
    <div className="pb-20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-finance-primary">Hello, Rahul</h1>
          <p className="text-finance-muted">Welcome back!</p>
        </div>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-finance-secondary text-white flex items-center justify-center">
            <span className="font-medium">R</span>
          </div>
          <span className="absolute top-0 right-0 w-3 h-3 bg-finance-success rounded-full border-2 border-white"></span>
        </div>
      </div>

      <Card className="mb-6 bg-gradient-to-r from-finance-accent to-finance-primary border-0">
        <CardContent className="py-6">
          <div className="text-white">
            <p className="text-sm font-medium opacity-80">Portfolio Value</p>
            <h2 className="text-3xl font-bold mb-2">₹{portfolioValue.toLocaleString('en-IN')}</h2>
            <div className="flex items-center">
              <span className={`font-medium ${isPositiveReturn ? 'text-green-300' : 'text-red-300'}`}>
                {isPositiveReturn ? '+' : ''}{returnPercentage}%
              </span>
              <span className="text-xs opacity-80 ml-2">all time</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-3">
            <Button className="bg-white text-finance-primary hover:bg-white/90 flex-1">
              Invest More
            </Button>
            <Button className="bg-transparent border border-white text-white hover:bg-white/10 flex-1">
              Withdraw
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-finance-primary">Top Performing Funds</h2>
          <Link to="/explore" className="text-finance-accent text-sm">
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {topFunds.map((fund) => (
            <Card key={fund.id} className="finance-card">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-finance-primary">{fund.name}</h3>
                  <p className="text-xs text-finance-muted">{fund.category} • {fund.aum}</p>
                </div>
                <div className="text-right">
                  <p className="text-finance-success font-medium">{fund.returnPercentage}%</p>
                  <p className="text-xs text-finance-muted">1Y Returns</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-finance-primary">Recent Investments</h2>
          <Link to="/transactions" className="text-finance-accent text-sm">
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {recentInvestments.map((investment) => (
            <Card key={investment.id} className="finance-card">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-finance-primary">{investment.name}</h3>
                  <p className="text-xs text-finance-muted">{investment.date} • {investment.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-finance-primary">₹{investment.amount.toLocaleString('en-IN')}</p>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-4 mb-6 border-dashed border-2 border-gray-300 bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium text-finance-primary mb-2">Create Investment Goal</h3>
          <p className="text-sm text-finance-muted mb-4">
            Set financial goals and track your progress
          </p>
          <Button variant="outline" className="border-finance-accent text-finance-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Create Goal
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;
