
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, ChevronRight, Filter, Search, PlusCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SipTracker = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("all");
  
  // Mock data for SIP investments
  const sipData = [
    {
      id: 1,
      fundName: "HDFC Mid-Cap Opportunities Fund",
      amount: 5000,
      frequency: "Monthly",
      status: "Active",
      nextDate: "15 May 2023",
      startDate: "15 Jan 2023",
      installmentsPaid: 4,
      totalInstallments: "Perpetual",
      logo: "https://groww.in/images/partners/hdfc_groww.svg"
    },
    {
      id: 2,
      fundName: "Axis Long Term Equity Fund",
      amount: 3000,
      frequency: "Monthly",
      status: "Active",
      nextDate: "20 May 2023",
      startDate: "20 Feb 2023",
      installmentsPaid: 3,
      totalInstallments: "36",
      logo: "https://groww.in/images/partners/axis_groww.svg"
    },
    {
      id: 3,
      fundName: "SBI Blue Chip Fund",
      amount: 2500,
      frequency: "Monthly",
      status: "Paused",
      nextDate: "10 Jul 2023",
      startDate: "10 Nov 2022",
      installmentsPaid: 6,
      totalInstallments: "Perpetual",
      logo: "https://groww.in/images/partners/sbi_groww.svg"
    },
    {
      id: 4,
      fundName: "Mirae Asset Emerging Bluechip Fund",
      amount: 10000,
      frequency: "Monthly",
      status: "Stopped",
      nextDate: "-",
      startDate: "5 Aug 2022",
      installmentsPaid: 7,
      totalInstallments: "24",
      logo: "https://groww.in/images/partners/mirae_groww.svg"
    }
  ];

  const filteredSips = status === "all" 
    ? sipData 
    : sipData.filter(sip => sip.status.toLowerCase() === status);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Paused":
        return "bg-amber-100 text-amber-700";
      case "Stopped":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            SIP Tracker
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your SIP Investments</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-app-gray-100">
              <Search className="h-4 w-4 text-app-gray-900" />
            </button>
            <button className="p-2 rounded-full bg-app-gray-100">
              <Filter className="h-4 w-4 text-app-gray-900" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="w-full flex bg-app-gray-100 p-1 rounded-lg mb-4">
              <TabsTrigger 
                value="active" 
                className="flex-1 rounded-md"
                onClick={() => setStatus("active")}
              >
                Active
              </TabsTrigger>
              <TabsTrigger 
                value="paused" 
                className="flex-1 rounded-md"
                onClick={() => setStatus("paused")}
              >
                Paused
              </TabsTrigger>
              <TabsTrigger 
                value="stopped" 
                className="flex-1 rounded-md"
                onClick={() => setStatus("stopped")}
              >
                Stopped
              </TabsTrigger>
              <TabsTrigger 
                value="all" 
                className="flex-1 rounded-md"
                onClick={() => setStatus("all")}
              >
                All
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-4">
          {filteredSips.length > 0 ? (
            filteredSips.map((sip) => (
              <Card key={sip.id} className="border border-app-gray-200 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full border border-app-gray-200 flex items-center justify-center p-1 shrink-0">
                      <img src={sip.logo} alt="Fund logo" className="h-7 w-7 object-contain" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-sm">{sip.fundName}</h3>
                        <Badge className={`${getStatusColor(sip.status)} text-xs`}>
                          {sip.status}
                        </Badge>
                      </div>
                      
                      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <p className="text-xs text-app-gray-500">SIP Amount</p>
                          <p className="font-semibold">₹{sip.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-app-gray-500">Frequency</p>
                          <p className="font-medium">{sip.frequency}</p>
                        </div>
                        <div>
                          <p className="text-xs text-app-gray-500">Next SIP Date</p>
                          <p className="font-medium flex items-center">
                            <Calendar className="h-3 w-3 mr-1 text-app-gray-500" />
                            {sip.nextDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-app-gray-500">Installments Paid</p>
                          <p className="font-medium">
                            {sip.installmentsPaid} / {sip.totalInstallments}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-app-gray-100 flex justify-between">
                        <button 
                          className="text-sm text-app-button-green font-medium"
                          onClick={() => navigate(`/portfolio/manage-sip/${sip.id}`)}
                        >
                          Manage SIP
                        </button>
                        <button 
                          className="text-sm text-app-gray-900 font-medium flex items-center"
                          onClick={() => navigate(`/funds/${sip.id}`)}
                        >
                          Fund Details
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-app-gray-500">No SIPs found with this status.</p>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-gray-200 shadow-nav max-w-lg mx-auto">
        <Button 
          className="w-full py-6 bg-app-button-green hover:bg-app-primary-green rounded-xl"
          onClick={() => navigate("/explore")}
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Start a New SIP
        </Button>
      </div>
    </div>
  );
};

export default SipTracker;
