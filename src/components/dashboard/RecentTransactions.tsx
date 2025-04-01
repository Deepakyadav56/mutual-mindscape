
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const RecentTransactions: React.FC = () => {
  // Mock data for recent transactions
  const transactions = [
    {
      id: 1,
      type: "purchase",
      fundName: "HDFC Mid-Cap Opportunities",
      amount: 5000,
      date: "Jun 15, 2023",
    },
    {
      id: 2,
      type: "purchase",
      fundName: "Axis Long Term Equity Fund",
      amount: 8000,
      date: "Jun 10, 2023",
    },
    {
      id: 3,
      type: "redemption",
      fundName: "ICICI Prudential Liquid Fund",
      amount: 10000,
      date: "May 15, 2023",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">Recent Transactions</CardTitle>
          <Link to="/transactions" className="text-xs text-finance-primary flex items-center">
            View All
            <ChevronRight className="h-3 w-3 ml-0.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
              <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                transaction.type === 'purchase' 
                  ? 'bg-emerald-100 text-emerald-600' 
                  : 'bg-amber-100 text-amber-600'
              }`}>
                {transaction.type === 'purchase' ? (
                  <ArrowDownRight className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800 truncate">{transaction.fundName}</h4>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${
                  transaction.type === 'purchase' ? 'text-gray-800' : 'text-emerald-600'
                }`}>
                  {transaction.type === 'purchase' ? '-' : '+'}₹{transaction.amount.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
