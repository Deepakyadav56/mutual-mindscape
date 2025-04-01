
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ChevronDown, ChevronUp, Share, Star, Info, Download, BadgeIndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const FundDetails = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();
  
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
    description: "The fund aims to generate long-term capital appreciation by investing predominantly in mid-cap companies.",
    logoUrl: "/hdfc-logo.svg" // In a real app, this would be a URL to the fund's logo
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
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "Fund removed from your watchlist" : "Fund added to your watchlist",
      variant: isFavorite ? "destructive" : "success",
    });
  };

  const handleInvest = () => {
    navigate(`/invest/${fundId}`);
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast({
      title: "Share fund",
      description: "Sharing options would appear here",
    });
  };

  const handleDownload = (docType) => {
    // In a real app, this would download the document
    toast({
      title: "Downloading document",
      description: `${docType} will be downloaded shortly`,
      variant: "success",
    });
  };

  // Rating stars display helper
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="pb-32 bg-gradient-to-b from-app-light-mint/80 to-white">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center justify-between p-4 border-b border-app-light-mint">
          <button onClick={() => navigate(-1)} className="text-app-primary-blue">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 truncate max-w-[70%]">
            Fund Details
          </h1>
          <div className="flex space-x-3">
            <button onClick={toggleFavorite} className="p-2 rounded-full hover:bg-app-light-mint transition-colors">
              <Star className={`h-5 w-5 ${isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
            </button>
            <button onClick={handleShare} className="p-2 rounded-full hover:bg-app-light-mint transition-colors">
              <Share className="h-5 w-5 text-app-gray-900" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Card className="mb-6 overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-200">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-12 w-12 bg-app-primary-blue/10 rounded-full flex items-center justify-center overflow-hidden">
                {fund.logoUrl ? (
                  <img src={fund.logoUrl} alt={`${fund.fundHouse} logo`} className="h-8 w-8" />
                ) : (
                  <BadgeIndianRupee className="h-6 w-6 text-app-primary-blue" />
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-app-gray-900 mb-1">{fund.name}</h2>
                <div className="flex items-center flex-wrap gap-2 text-sm text-app-gray-900 opacity-80 mb-2">
                  <span>{fund.category}</span>
                  <span className="h-4 w-[1px] bg-gray-300"></span>
                  <Badge variant="outline" className={`
                    ${fund.riskLevel === "Low" ? "bg-green-100 text-green-800" : 
                      fund.riskLevel === "Moderate" ? "bg-yellow-100 text-yellow-800" : 
                      "bg-orange-100 text-orange-800"}
                  `}>
                    {fund.riskLevel}
                  </Badge>
                </div>
                <div className="flex items-center mt-1">
                  {renderRatingStars(fund.rating)}
                  <span className="ml-1 text-xs text-gray-500">({fund.rating}/5)</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-5 p-3 bg-app-light-mint/50 rounded-xl">
              <div className="text-center">
                <p className="text-xs text-app-gray-900 opacity-70">NAV</p>
                <p className="text-lg font-semibold text-app-charcoal">{fund.nav}</p>
                <p className="text-xs text-app-gray-900 opacity-70">{fund.navDate}</p>
              </div>
              <div className="text-center border-l border-app-light-mint">
                <p className="text-xs text-app-gray-900 opacity-70">1Y Returns</p>
                <p className="text-lg font-semibold text-app-primary-green">+{fund.returnPercentage["1Y"]}%</p>
                <div className="flex items-center justify-center text-xs text-app-gray-900 opacity-70">
                  <span>Vs. Benchmark</span>
                  <span className="ml-1 text-app-primary-green">+1.6%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="mb-6 border-0 shadow-card">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-app-gray-900 opacity-70 mb-1">Min. Investment</p>
                <p className="font-semibold text-app-gray-900">{fund.minInvestment}</p>
              </div>
              <div>
                <p className="text-xs text-app-gray-900 opacity-70 mb-1">Fund Size</p>
                <p className="font-semibold text-app-gray-900">{fund.aum}</p>
              </div>
              <div>
                <p className="text-xs text-app-gray-900 opacity-70 mb-1">Expense Ratio</p>
                <p className="font-semibold text-app-gray-900">{fund.expenseRatio}</p>
              </div>
              <div>
                <p className="text-xs text-app-gray-900 opacity-70 mb-1">Fund Manager</p>
                <p className="font-semibold text-app-gray-900">{fund.fundManager}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="performance" className="mb-6">
          <TabsList className="w-full grid grid-cols-4 mb-4 bg-app-light-mint rounded-xl h-12">
            <TabsTrigger value="performance" className="rounded-xl data-[state=active]:bg-app-primary-blue data-[state=active]:text-white">Performance</TabsTrigger>
            <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-app-primary-blue data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="holdings" className="rounded-xl data-[state=active]:bg-app-primary-blue data-[state=active]:text-white">Holdings</TabsTrigger>
            <TabsTrigger value="documents" className="rounded-xl data-[state=active]:bg-app-primary-blue data-[state=active]:text-white">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="space-y-4 animate-fade-in">
            <Card className="border-0 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b border-app-light-mint">
                  <h3 className="font-semibold text-app-gray-900">Returns Comparison</h3>
                </div>
                <div className="p-4">
                  {performanceData.map((data) => (
                    <div key={data.period} className="flex justify-between items-center py-3 border-b border-app-light-mint last:border-0">
                      <span className="text-sm font-medium text-app-gray-900">{data.period}</span>
                      <div className="flex items-center space-x-8">
                        <div className="w-24 text-right">
                          <p className="text-sm font-semibold text-app-primary-green">+{data.fund}%</p>
                          <p className="text-xs text-app-gray-900 opacity-70">Fund</p>
                        </div>
                        <div className="w-24 text-right">
                          <p className="text-sm font-semibold text-gray-700">+{data.benchmark}%</p>
                          <p className="text-xs text-app-gray-900 opacity-70">Benchmark</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <h3 className="font-semibold text-app-gray-900 mb-3">Historical Performance</h3>
                <div className="h-40 bg-app-light-mint/50 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-app-gray-900">Performance chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="overview" className="animate-fade-in">
            <Card className="border-0 shadow-card">
              <CardContent className="p-0">
                <div className="p-4 border-b border-app-light-mint">
                  <h3 className="font-semibold text-app-gray-900">Fund Overview</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-app-gray-900 mb-4 leading-relaxed">{fund.description}</p>
                  
                  <div className="space-y-3">
                    {[
                      { label: "Fund House", value: fund.fundHouse },
                      { label: "Launch Date", value: fund.launchDate },
                      { label: "Benchmark", value: fund.benchmark },
                      { label: "Exit Load", value: fund.exitLoad }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-app-light-mint last:border-0">
                        <span className="text-sm text-app-gray-900 opacity-80">{item.label}</span>
                        <span className="text-sm font-medium text-app-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="holdings" className="space-y-4 animate-fade-in">
            <Card className="border-0 shadow-card">
              <CardContent className="p-0">
                <div className="p-4 border-b border-app-light-mint">
                  <h3 className="font-semibold text-app-gray-900">Top Holdings</h3>
                </div>
                <div className="p-4">
                  {[
                    { name: "HDFC Bank", allocation: 9.85, change: 0.75 },
                    { name: "ICICI Bank", allocation: 8.92, change: -0.32 },
                    { name: "Reliance Industries", allocation: 7.78, change: 1.15 },
                    { name: "Infosys", allocation: 6.35, change: 0.23 },
                    { name: "TCS", allocation: 5.67, change: -0.54 }
                  ].map((stock, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-app-light-mint last:border-0">
                      <div>
                        <span className="text-sm font-medium text-app-gray-900">{stock.name}</span>
                        <div className="flex items-center mt-1">
                          <span className={`text-xs ${stock.change > 0 ? 'text-app-primary-green' : 'text-red-500'}`}>
                            {stock.change > 0 ? '↑' : '↓'} {Math.abs(stock.change)}%
                          </span>
                          <span className="mx-2 text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">1D</span>
                        </div>
                      </div>
                      <span className="text-sm text-app-gray-900">{stock.allocation}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <h3 className="font-semibold text-app-gray-900 mb-3">Sector Allocation</h3>
                <div className="h-40 bg-app-light-mint/50 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-app-gray-900">Sector allocation chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="documents" className="animate-fade-in">
            <Card className="border-0 shadow-card">
              <CardContent className="p-0">
                <div className="p-4 border-b border-app-light-mint">
                  <h3 className="font-semibold text-app-gray-900">Fund Documents</h3>
                </div>
                <div className="p-4">
                  {[
                    "Scheme Information Document", 
                    "Key Information Memorandum", 
                    "Annual Report", 
                    "Portfolio Disclosure",
                    "Factsheet"
                  ].map((doc, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-app-light-mint last:border-0">
                      <span className="text-sm font-medium text-app-gray-900">{doc}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-app-primary-blue hover:text-app-primary-blue hover:bg-app-primary-blue/10"
                        onClick={() => handleDownload(doc)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-6 border-0 shadow-card bg-app-light-blue/50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-app-primary-blue shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-app-gray-900 mb-2">Important Information</h3>
                <ul className="text-sm text-app-gray-900 opacity-80 space-y-2 list-disc pl-4">
                  <li>Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.</li>
                  <li>Past performance is not indicative of future returns.</li>
                  <li>The NAV of the scheme can go up or down depending upon the factors and forces affecting the securities market.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-light-mint flex justify-between items-center shadow-nav max-w-lg mx-auto">
        <div>
          <p className="text-xs text-app-gray-900 opacity-70">Min. Investment</p>
          <p className="font-semibold text-app-gray-900">{fund.minInvestment}</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="border-app-primary-blue text-app-primary-blue hover:bg-app-primary-blue/10 py-6"
            onClick={() => {
              toast({
                title: "Added to compare",
                description: "This fund has been added to your comparison list",
                variant: "success",
              });
            }}
          >
            Compare
          </Button>
          <Button 
            onClick={handleInvest} 
            className="bg-app-primary-blue hover:bg-app-primary-blue/90 text-white py-6 px-8 rounded-xl"
          >
            Invest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FundDetails;
