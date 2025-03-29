
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ChevronDown, ChevronUp, Share, Star, Info, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FundDetails = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Mock fund data (would be fetched based on fundId)
  const fund = {
    id: fundId || "1",
    name: "HDFC Mid-Cap Opportunities Fund",
    category: "Equity - Mid Cap",
    riskLevel: "Moderate to High",
    returnPercentage: {
      "1Y": 15.8,
      "3Y": 12.6,
      "5Y": 11.8,
      "10Y": 14.2
    },
    rating: 5,
    aum: "₹26,293 Cr",
    nav: "₹98.75",
    navDate: "30 Aug 2023",
    expenseRatio: "1.92%",
    minInvestment: "₹500",
    fundManager: "Chirag Setalvad",
    exitLoad: "1% if redeemed within 1 year",
    fundHouse: "HDFC Mutual Fund",
    launchDate: "25 Jun 2007",
    benchmark: "Nifty Midcap 150 TRI",
    description: "The fund aims to generate long-term capital appreciation by investing predominantly in mid-cap companies."
  };
  
  const performanceData = [
    { period: "1M", fund: 3.2, benchmark: 2.8 },
    { period: "3M", fund: 7.5, benchmark: 6.4 },
    { period: "6M", fund: 9.8, benchmark: 8.3 },
    { period: "1Y", fund: 15.8, benchmark: 14.2 },
    { period: "3Y", fund: 12.6, benchmark: 11.1 },
    { period: "5Y", fund: 11.8, benchmark: 10.5 },
  ];

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleInvest = () => {
    navigate(`/invest/${fundId}`);
  };

  return (
    <div className="pb-32">
      <div className="sticky top-0 bg-app-mint z-10">
        <div className="flex items-center justify-between p-4 border-b border-app-light-mint">
          <button onClick={() => navigate(-1)} className="text-app-charcoal">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-charcoal truncate max-w-[70%]">
            Fund Details
          </h1>
          <div className="flex space-x-2">
            <button onClick={toggleFavorite}>
              <Star className={`h-5 w-5 ${isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
            </button>
            <button>
              <Share className="h-5 w-5 text-app-charcoal" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-app-charcoal mb-1">{fund.name}</h2>
          <div className="flex items-center text-sm text-app-charcoal opacity-80 mb-2">
            <span>{fund.category}</span>
            <span className="mx-2">•</span>
            <Badge variant="outline" className={`
              ${fund.riskLevel === "Low" ? "bg-green-100 text-green-800" : 
                fund.riskLevel === "Moderate" ? "bg-yellow-100 text-yellow-800" : 
                "bg-orange-100 text-orange-800"}
            `}>
              {fund.riskLevel}
            </Badge>
          </div>
          
          <div className="flex justify-between items-baseline mt-4">
            <div>
              <p className="text-xs text-app-charcoal opacity-70">NAV</p>
              <p className="text-lg font-semibold text-app-charcoal">{fund.nav}</p>
              <p className="text-xs text-app-charcoal opacity-70">{fund.navDate}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-app-charcoal opacity-70">1Y Returns</p>
              <p className="text-lg font-semibold text-green-600">+{fund.returnPercentage["1Y"]}%</p>
            </div>
          </div>
        </div>

        <Card className="mb-6 border-app-light-mint">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-r border-app-light-mint pr-4">
                <p className="text-xs text-app-charcoal opacity-70">Min. Investment</p>
                <p className="font-semibold text-app-charcoal">{fund.minInvestment}</p>
              </div>
              <div>
                <p className="text-xs text-app-charcoal opacity-70">Fund Size</p>
                <p className="font-semibold text-app-charcoal">{fund.aum}</p>
              </div>
              <div className="border-r border-app-light-mint pr-4">
                <p className="text-xs text-app-charcoal opacity-70">Expense Ratio</p>
                <p className="font-semibold text-app-charcoal">{fund.expenseRatio}</p>
              </div>
              <div>
                <p className="text-xs text-app-charcoal opacity-70">Fund Manager</p>
                <p className="font-semibold text-app-charcoal">{fund.fundManager}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="performance" className="mb-6">
          <TabsList className="w-full grid grid-cols-4 mb-4 bg-app-light-mint">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="holdings">Holdings</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="space-y-4">
            <Card className="border-app-light-mint">
              <CardContent className="p-4">
                <h3 className="font-semibold text-app-charcoal mb-3">Returns Comparison</h3>
                <div className="space-y-2">
                  {performanceData.map((data) => (
                    <div key={data.period} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-app-charcoal">{data.period}</span>
                      <div className="flex items-center space-x-4">
                        <div className="w-24">
                          <p className="text-sm font-semibold text-green-600">+{data.fund}%</p>
                          <p className="text-xs text-app-charcoal opacity-70">Fund</p>
                        </div>
                        <div className="w-24">
                          <p className="text-sm font-semibold text-gray-600">+{data.benchmark}%</p>
                          <p className="text-xs text-app-charcoal opacity-70">Benchmark</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="overview">
            <Card className="border-app-light-mint">
              <CardContent className="p-4">
                <h3 className="font-semibold text-app-charcoal mb-2">Fund Overview</h3>
                <p className="text-sm text-app-charcoal mb-4">{fund.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-app-charcoal opacity-80">Fund House</span>
                    <span className="text-sm font-medium text-app-charcoal">{fund.fundHouse}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-app-charcoal opacity-80">Launch Date</span>
                    <span className="text-sm font-medium text-app-charcoal">{fund.launchDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-app-charcoal opacity-80">Benchmark</span>
                    <span className="text-sm font-medium text-app-charcoal">{fund.benchmark}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-app-charcoal opacity-80">Exit Load</span>
                    <span className="text-sm font-medium text-app-charcoal">{fund.exitLoad}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="holdings" className="space-y-4">
            <Card className="border-app-light-mint">
              <CardContent className="p-4">
                <h3 className="font-semibold text-app-charcoal mb-3">Top Holdings</h3>
                <div className="space-y-2">
                  {["HDFC Bank", "ICICI Bank", "Reliance Industries", "Infosys", "TCS"].map((stock, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-app-light-mint last:border-0">
                      <span className="text-sm font-medium text-app-charcoal">{stock}</span>
                      <span className="text-sm text-app-charcoal">{(10 - index).toFixed(2)}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="documents">
            <Card className="border-app-light-mint">
              <CardContent className="p-4">
                <div className="space-y-4">
                  {["Scheme Information Document", "Key Information Memorandum", "Annual Report", "Portfolio Disclosure"].map((doc, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-app-light-mint last:border-0">
                      <span className="text-sm font-medium text-app-charcoal">{doc}</span>
                      <Download className="h-4 w-4 text-app-charcoal" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-light-mint flex justify-between items-center">
        <div>
          <p className="text-xs text-app-charcoal opacity-70">Min. Investment</p>
          <p className="font-semibold text-app-charcoal">{fund.minInvestment}</p>
        </div>
        <Button onClick={handleInvest} className="bg-app-charcoal text-app-mint py-6 px-8 rounded-full">
          Invest
        </Button>
      </div>
    </div>
  );
};

export default FundDetails;
