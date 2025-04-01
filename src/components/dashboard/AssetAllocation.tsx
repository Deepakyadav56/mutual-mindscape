
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AssetAllocationProps {
  data: {
    type: string;
    percentage: number;
    value: number;
  }[];
}

const COLORS = ['#10b981', '#6366f1', '#f59e0b'];

export const AssetAllocation: React.FC<AssetAllocationProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">Asset Allocation</CardTitle>
          <Link to="/portfolio/analysis" className="text-xs text-finance-primary flex items-center">
            View Details
            <ChevronRight className="h-3 w-3 ml-0.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center">
          <div className="w-1/2 h-40">
            <ChartContainer 
              config={{
                equity: {
                  color: COLORS[0],
                },
                debt: {
                  color: COLORS[1],
                },
                gold: {
                  color: COLORS[2],
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="percentage"
                    nameKey="type"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 rounded-md shadow-md border border-gray-100">
                            <p className="text-xs font-medium text-gray-900">{payload[0].name}</p>
                            <p className="text-xs text-gray-600">{payload[0].value}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="w-1/2">
            <ul className="space-y-2">
              {data.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-sm mr-2" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-700">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{item.percentage}%</p>
                    <p className="text-xs text-gray-500">₹{item.value.toLocaleString('en-IN')}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
