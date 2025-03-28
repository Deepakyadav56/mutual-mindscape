
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Transactions = () => {
  // Mock data for transactions
  const transactions = [
    {
      id: 1,
      type: "purchase",
      fundName: "HDFC Mid-Cap Opportunities",
      amount: 5000,
      units: 26.489,
      date: "Jun 15, 2023",
      status: "completed",
      transactionType: "SIP",
    },
    {
      id: 2,
      type: "purchase",
      fundName: "Axis Long Term Equity Fund",
      amount: 8000,
      units: 29.407,
      date: "Jun 10, 2023",
      status: "completed",
      transactionType: "SIP",
    },
    {
      id: 3,
      type: "purchase",
      fundName: "Aditya Birla Sun Life Tax Relief 96",
      amount: 25000,
      units: 105.738,
      date: "May 21, 2023",
      status: "completed",
      transactionType: "One-time",
    },
    {
      id: 4,
      type: "redemption",
      fundName: "ICICI Prudential Liquid Fund",
      amount: 10000,
      units: 29.193,
      date: "May 15, 2023",
      status: "completed",
      transactionType: "Withdrawal",
    },
    {
      id: 5,
      type: "purchase",
      fundName: "HDFC Mid-Cap Opportunities",
      amount: 5000,
      units: 26.882,
      date: "May 15, 2023",
      status: "completed",
      transactionType: "SIP",
    },
    {
      id: 6,
      type: "purchase",
      fundName: "Axis Long Term Equity Fund",
      amount: 8000,
      units: 29.925,
      date: "May 10, 2023",
      status: "completed",
      transactionType: "SIP",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
            Completed
          </span>
        );
      case "pending":
        return (
          <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
            Pending
          </span>
        );
      case "failed":
        return (
          <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    if (type === "purchase") {
      return (
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-green-600"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      );
    } else {
      return (
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-red-600"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </div>
      );
    }
  };

  return (
    <div className="pb-20">
      <h1 className="text-2xl font-bold text-finance-primary mb-6">Transactions</h1>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="purchase">Purchases</TabsTrigger>
          <TabsTrigger value="redemption">Redemptions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="p-4">
                <div className="flex">
                  {getTypeIcon(transaction.type)}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-finance-primary">{transaction.fundName}</h3>
                      <div className="text-right">
                        <p className={`font-medium ${transaction.type === "purchase" ? "text-finance-primary" : "text-finance-danger"}`}>
                          {transaction.type === "purchase" ? "-" : "+"} ₹{transaction.amount.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs text-finance-muted">{transaction.date} • {transaction.transactionType}</p>
                      <p className="text-xs text-finance-muted">{transaction.units} units</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {getStatusBadge(transaction.status)}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="purchase">
          <div className="space-y-4">
            {transactions
              .filter((transaction) => transaction.type === "purchase")
              .map((transaction) => (
                <Card key={transaction.id} className="p-4">
                  <div className="flex">
                    {getTypeIcon(transaction.type)}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-finance-primary">{transaction.fundName}</h3>
                        <div className="text-right">
                          <p className="font-medium text-finance-primary">
                            - ₹{transaction.amount.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-xs text-finance-muted">{transaction.date} • {transaction.transactionType}</p>
                        <p className="text-xs text-finance-muted">{transaction.units} units</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        {getStatusBadge(transaction.status)}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="redemption">
          <div className="space-y-4">
            {transactions
              .filter((transaction) => transaction.type === "redemption")
              .map((transaction) => (
                <Card key={transaction.id} className="p-4">
                  <div className="flex">
                    {getTypeIcon(transaction.type)}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-finance-primary">{transaction.fundName}</h3>
                        <div className="text-right">
                          <p className="font-medium text-finance-danger">
                            + ₹{transaction.amount.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-xs text-finance-muted">{transaction.date} • {transaction.transactionType}</p>
                        <p className="text-xs text-finance-muted">{transaction.units} units</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        {getStatusBadge(transaction.status)}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Transactions;
