
import React from "react";
import { ChartContainer } from "@/components/ui/chart";
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from "recharts";

// Mock data for portfolio performance chart
const generateChartData = (timeRange: string) => {
  const data = [];
  let days = 30;
  
  switch (timeRange) {
    case "1M":
      days = 30;
      break;
    case "3M":
      days = 90;
      break;
    case "6M":
      days = 180;
      break;
    case "1Y":
      days = 365;
      break;
    case "All":
      days = 730; // 2 years
      break;
    default:
      days = 30;
  }
  
  let lastValue = 100000;
  const volatility = 0.01; // 1% daily volatility
  const uptrend = 0.0008; // Slight uptrend
  
  for (let i = 0; i < days; i++) {
    // Generate a random daily return with a slight uptrend
    const dailyReturn = (Math.random() - 0.5) * volatility * 2 + uptrend;
    lastValue = lastValue * (1 + dailyReturn);
    
    // Format the date
    let date;
    const now = new Date();
    const pastDate = new Date(now);
    pastDate.setDate(now.getDate() - (days - i));
    
    if (timeRange === "1M" || timeRange === "3M") {
      date = pastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } else {
      date = pastDate.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    }
    
    data.push({
      date,
      value: Math.round(lastValue)
    });
  }
  
  return data;
};

interface PortfolioChartProps {
  timeRange: string;
}

export const PortfolioChart: React.FC<PortfolioChartProps> = ({ timeRange }) => {
  const data = generateChartData(timeRange);
  
  return (
    <div className="w-full h-64">
      <ChartContainer 
        config={{
          portfolioValue: {
            theme: {
              light: "#10b981",
              dark: "#10b981"
            }
          }
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#6b7280' }}
              tickMargin={10}
              minTickGap={10}
            />
            <YAxis 
              hide
              domain={[(dataMin: any) => dataMin * 0.95, (dataMax: any) => dataMax * 1.05]}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f3f4f6" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 rounded-md shadow-md border border-gray-100">
                      <p className="text-xs text-gray-500">{payload[0].payload.date}</p>
                      <p className="text-sm font-medium text-gray-900">
                        ₹{payload[0].value.toLocaleString('en-IN')}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};
