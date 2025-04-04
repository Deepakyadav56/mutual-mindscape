
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Globe, 
  Calendar, 
  Users, 
  Percent, 
  Award, 
  Building, 
  ChevronRight,
  FileText,
  TrendingUp,
  Share2
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FundHouseInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  // Mock fund houses data
  const fundHouses = {
    "hdfc": {
      id: "hdfc",
      name: "HDFC Mutual Fund",
      logo: "https://placehold.co/80x80",
      established: "2000",
      aum: "₹4.7 Trillion",
      website: "www.hdfcfund.com",
      rating: 4.5,
      description: "HDFC Mutual Fund is one of India's leading mutual fund houses offering a range of equity, debt, and hybrid funds. The company has a strong track record of delivering consistent returns across market cycles.",
      keyPeople: [
        { name: "Navneet Munot", designation: "CEO" },
        { name: "Prashant Jain", designation: "Former CIO" }
      ],
      performance: {
        equity: "15.7%",
        debt: "7.2%",
        hybrid: "10.4%",
        overall: "12.8%"
      },
      funds: [
        { id: 1, name: "HDFC Top 100 Fund", category: "Equity - Large Cap", returns: "14.5%", rating: 4, aum: "₹22,456 Cr" },
        { id: 2, name: "HDFC Mid-Cap Opportunities Fund", category: "Equity - Mid Cap", returns: "18.2%", rating: 5, aum: "₹33,890 Cr" },
        { id: 3, name: "HDFC Balanced Advantage Fund", category: "Hybrid", returns: "12.8%", rating: 4, aum: "₹45,678 Cr" },
        { id: 4, name: "HDFC Corporate Bond Fund", category: "Debt", returns: "8.1%", rating: 4, aum: "₹15,234 Cr" },
      ],
      awards: [
        "Best Fund House - Equity (2022)",
        "Best Fund Manager - Debt (2021)",
        "Most Innovative AMC (2020)"
      ],
      factsheets: [
        { id: 1, name: "Monthly Fund Performance", date: "March 2025" },
        { id: 2, name: "Fund Manager Commentary", date: "Q1 2025" },
        { id: 3, name: "Annual Report", date: "FY 2024-25" }
      ]
    },
    "sbi": {
      id: "sbi",
      name: "SBI Mutual Fund",
      logo: "https://placehold.co/80x80",
      established: "1992",
      aum: "₹7.2 Trillion",
      website: "www.sbimf.com",
      rating: 4.7,
      description: "SBI Mutual Fund is India's largest asset management company with a robust portfolio of funds. It has maintained a strong growth trajectory and has consistently been among the top performers in the industry.",
      keyPeople: [
        { name: "Vinay M. Tonse", designation: "CEO" },
        { name: "Rajeev Srivastava", designation: "CIO" }
      ],
      performance: {
        equity: "16.5%",
        debt: "7.8%",
        hybrid: "11.2%",
        overall: "13.4%"
      },
      funds: [
        { id: 5, name: "SBI Bluechip Fund", category: "Equity - Large Cap", returns: "15.1%", rating: 4, aum: "₹32,786 Cr" },
        { id: 6, name: "SBI Small Cap Fund", category: "Equity - Small Cap", returns: "22.3%", rating: 5, aum: "₹18,234 Cr" },
        { id: 7, name: "SBI Equity Hybrid Fund", category: "Hybrid", returns: "13.7%", rating: 4, aum: "₹54,321 Cr" },
        { id: 8, name: "SBI Banking & PSU Fund", category: "Debt", returns: "7.9%", rating: 4, aum: "₹12,345 Cr" },
      ],
      awards: [
        "Largest Fund House (2023)",
        "Best Fund House - Overall (2022)",
        "Best Investor Education Initiative (2021)"
      ],
      factsheets: [
        { id: 4, name: "Monthly Fund Performance", date: "March 2025" },
        { id: 5, name: "Quarterly Market Outlook", date: "Q1 2025" },
        { id: 6, name: "Annual Report", date: "FY 2024-25" }
      ]
    },
    "axis": {
      id: "axis",
      name: "Axis Mutual Fund",
      logo: "https://placehold.co/80x80",
      established: "2009",
      aum: "₹2.8 Trillion",
      website: "www.axismf.com",
      rating: 4.3,
      description: "Axis Mutual Fund is one of the faster-growing AMCs in India with a focus on risk-managed returns. The fund house is known for its strong research-driven investment approach and quality of fund management.",
      keyPeople: [
        { name: "Chandresh Kumar Nigam", designation: "CEO" },
        { name: "Jinesh Gopani", designation: "Head of Equity" }
      ],
      performance: {
        equity: "14.8%",
        debt: "7.5%",
        hybrid: "10.9%",
        overall: "12.1%"
      },
      funds: [
        { id: 9, name: "Axis Bluechip Fund", category: "Equity - Large Cap", returns: "14.7%", rating: 4, aum: "₹24,567 Cr" },
        { id: 10, name: "Axis Midcap Fund", category: "Equity - Mid Cap", returns: "19.3%", rating: 5, aum: "₹16,789 Cr" },
        { id: 11, name: "Axis Growth Opportunities Fund", category: "Equity", returns: "17.2%", rating: 4, aum: "₹13,456 Cr" },
        { id: 12, name: "Axis Dynamic Bond Fund", category: "Debt", returns: "7.6%", rating: 4, aum: "₹8,765 Cr" },
      ],
      awards: [
        "Best Fund House - Equity (2023)",
        "Most Consistent Fund House (2022)",
        "Best Emerging Fund Manager (2021)"
      ],
      factsheets: [
        { id: 7, name: "Monthly Fund Performance", date: "March 2025" },
        { id: 8, name: "Investment Outlook", date: "Q1 2025" },
        { id: 9, name: "Annual Report", date: "FY 2024-25" }
      ]
    }
  };

  // Get the fund house data
  const fundHouse = fundHouses[id as keyof typeof fundHouses] || fundHouses.hdfc;

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900">
            Fund House
          </h1>
          <button className="text-app-gray-900">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl border overflow-hidden mb-6"
        >
          <div className="p-4 flex items-center">
            <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 mr-4 border">
              <img 
                src={fundHouse.logo} 
                alt={fundHouse.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">{fundHouse.name}</h2>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(fundHouse.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm ml-1 text-gray-600">{fundHouse.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="overview" className="mb-6">
          <TabsList className="w-full bg-gray-50 p-1">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="funds" className="flex-1">Funds</TabsTrigger>
            <TabsTrigger value="performance" className="flex-1">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-4">
                <p className="text-gray-700">{fundHouse.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-app-primary-green mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Established</p>
                      <p className="font-medium">{fundHouse.established}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-app-primary-blue mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Website</p>
                      <p className="font-medium">{fundHouse.website}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-amber-500 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Assets Under Management</p>
                      <p className="font-medium">{fundHouse.aum}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Percent className="h-5 w-5 text-purple-500 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Overall Return</p>
                      <p className="font-medium">{fundHouse.performance.overall}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Key People</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  {fundHouse.keyPeople.map((person, index) => (
                    <div key={index} className="flex items-center">
                      <Users className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-xs text-gray-500">{person.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Awards & Recognition</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  {fundHouse.awards.map((award, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-5 w-5 text-yellow-500 mr-3" />
                      <p className="text-sm">{award}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Documents & Factsheets</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  {fundHouse.factsheets.map((factsheet) => (
                    <div key={factsheet.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-app-primary-blue mr-3" />
                        <div>
                          <p className="font-medium text-sm">{factsheet.name}</p>
                          <p className="text-xs text-gray-500">{factsheet.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-app-primary-green">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="funds" className="mt-4">
            <h2 className="text-lg font-bold mb-3">Popular Funds</h2>
            <div className="space-y-3">
              {fundHouse.funds.map((fund) => (
                <Card 
                  key={fund.id} 
                  className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition-all duration-200"
                  onClick={() => navigate(`/funds/${fund.id}`)}
                >
                  <CardContent className="p-3">
                    <div className="mb-2">
                      <h3 className="font-medium">{fund.name}</h3>
                      <p className="text-xs text-gray-500">{fund.category}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">AUM</p>
                        <p className="text-sm font-medium">{fund.aum}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-500">Rating</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              className={`w-3 h-3 ${i < fund.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-xs text-gray-500">3Y Returns</p>
                        <p className="text-green-600 font-medium">{fund.returns}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-4 flex justify-center">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/explore?fund_house=${fundHouse.id}`)}
                className="w-full"
              >
                View All Funds <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-4">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Category-wise Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Equity Funds</p>
                      <p className="text-green-600 font-medium">{fundHouse.performance.equity}</p>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-green-500 rounded-full" 
                        style={{ width: `${parseFloat(fundHouse.performance.equity) * 4}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Debt Funds</p>
                      <p className="text-blue-600 font-medium">{fundHouse.performance.debt}</p>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-blue-500 rounded-full" 
                        style={{ width: `${parseFloat(fundHouse.performance.debt) * 8}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Hybrid Funds</p>
                      <p className="text-purple-600 font-medium">{fundHouse.performance.hybrid}</p>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-purple-500 rounded-full" 
                        style={{ width: `${parseFloat(fundHouse.performance.hybrid) * 6}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium">Overall Performance</p>
                      <p className="text-app-primary-green font-bold">{fundHouse.performance.overall}</p>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-app-primary-green rounded-full" 
                        style={{ width: `${parseFloat(fundHouse.performance.overall) * 5}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <h3 className="text-base font-bold mb-3">Industry Comparison</h3>
              <div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center h-40">
                <p className="text-gray-500">
                  Industry comparison charts will be displayed here
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 flex space-x-3">
          <Button 
            className="flex-1 bg-white border border-app-primary-green text-app-primary-green hover:bg-app-light-green"
            variant="outline"
            onClick={() => navigate(`/explore?fund_house=${fundHouse.id}`)}
          >
            View Funds
          </Button>
          
          <Button 
            className="flex-1 bg-app-primary-green hover:bg-app-green/90"
            onClick={() => window.open(`https://${fundHouse.website}`, '_blank')}
          >
            <Globe className="h-4 w-4 mr-2" />
            Visit Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FundHouseInfo;
