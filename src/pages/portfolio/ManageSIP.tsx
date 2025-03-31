
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ArrowLeft, Calendar as CalendarIcon, AlertCircle, Pause, SkipForward, Edit3 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const ManageSIP = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipDate, setSipDate] = useState(15);
  const [nextSipDate, setNextSipDate] = useState<Date | undefined>(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15));
  const [isPauseSIP, setIsPauseSIP] = useState(false);
  const [pauseDuration, setPauseDuration] = useState("3");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock SIP data (would be fetched based on fundId)
  const sip = {
    id: fundId || "1",
    fundName: "HDFC Mid-Cap Opportunities Fund",
    category: "Equity - Mid Cap",
    currentAmount: 5000,
    status: "Active",
    registrationDate: "10 Jan 2023",
    totalInvested: 60000,
    nextInstallment: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15),
    sipDay: 15,
    folioNumber: "1234567/89",
    investmentCount: 12,
    totalInstallments: "Perpetual"
  };

  const handleSipAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ''));
    if (!isNaN(value)) {
      setSipAmount(value);
    } else {
      setSipAmount(0);
    }
  };

  const handleSipDateChange = (value: string) => {
    const day = parseInt(value);
    setSipDate(day);
    
    // Calculate next SIP date
    const currentDate = new Date();
    let nextMonth = currentDate.getMonth();
    let nextYear = currentDate.getFullYear();
    
    if (currentDate.getDate() >= day) {
      nextMonth += 1;
      if (nextMonth > 11) {
        nextMonth = 0;
        nextYear += 1;
      }
    }
    
    setNextSipDate(new Date(nextYear, nextMonth, day));
  };

  const handleSipUpdate = () => {
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "SIP Updated",
        description: `Your SIP amount has been updated to ₹${sipAmount.toLocaleString()} and SIP date to ${sipDate}.`,
      });
      navigate("/portfolio");
    }, 1500);
  };

  const handleSipPause = () => {
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "SIP Paused",
        description: `Your SIP has been paused for ${pauseDuration} months.`,
      });
      navigate("/portfolio");
    }, 1500);
  };

  const handleSipCancel = () => {
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "SIP Cancelled",
        description: "Your SIP has been cancelled successfully.",
      });
      navigate("/portfolio");
    }, 1500);
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            Manage SIP
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-app-gray-900 mb-1">{sip.fundName}</h2>
          <div className="flex items-center text-sm text-app-gray-900 opacity-80">
            <span>{sip.category}</span>
            <span className="mx-2">•</span>
            <span className="px-2 py-0.5 rounded-full bg-app-primary-green/10 text-app-primary-green text-xs font-medium">
              {sip.status}
            </span>
          </div>
          
          <Card className="mt-4 border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">Current SIP Amount</p>
                  <p className="font-semibold text-app-gray-900">₹{sip.currentAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">Total Invested</p>
                  <p className="font-semibold text-app-gray-900">₹{sip.totalInvested.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">Next Installment</p>
                  <p className="font-semibold text-app-gray-900">{format(sip.nextInstallment, "dd MMM yyyy")}</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900 opacity-70">Folio Number</p>
                  <p className="font-semibold text-app-gray-900">{sip.folioNumber}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold flex items-center mb-4">
                <Edit3 className="w-5 h-5 mr-2 text-app-primary-blue" />
                Update SIP
              </h3>
              <div className="space-y-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="sip-amount" className="text-app-gray-900">
                      Monthly SIP Amount
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-gray-900">₹</span>
                      <Input
                        id="sip-amount"
                        className="pl-8 w-32 text-right bg-white input-modern"
                        value={sipAmount.toLocaleString()}
                        onChange={handleSipAmountChange}
                      />
                    </div>
                  </div>
                  <Slider
                    value={[sipAmount]}
                    min={500}
                    max={50000}
                    step={500}
                    onValueChange={(values) => setSipAmount(values[0])}
                    className="bg-app-light-blue rounded-full"
                  />
                  <div className="flex justify-between text-xs text-app-gray-900 opacity-70">
                    <span>₹500</span>
                    <span>₹25,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="sip-date" className="text-app-gray-900 block">
                    SIP Date
                  </Label>
                  <Select value={String(sipDate)} onValueChange={handleSipDateChange}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Select SIP date" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 5, 10, 15, 20, 25, 28].map((date) => (
                        <SelectItem key={date} value={String(date)}>
                          {date}th of every month
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="flex items-center mt-2">
                    <CalendarIcon className="w-4 h-4 mr-2 text-app-gray-900 opacity-70" />
                    <span className="text-sm text-app-gray-900 opacity-80">
                      Next SIP will be debited on{" "}
                      <span className="font-medium text-app-gray-900">
                        {nextSipDate ? format(nextSipDate, "dd MMM yyyy") : ""}
                      </span>
                    </span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-app-primary-blue text-white"
                  onClick={handleSipUpdate}
                  disabled={isProcessing}
                >
                  Update SIP
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold flex items-center mb-4">
                <Pause className="w-5 h-5 mr-2 text-app-gray-900" />
                Pause SIP
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="pause-duration" className="text-app-gray-900 block mb-2">
                    Pause Duration
                  </Label>
                  <Select 
                    value={pauseDuration} 
                    onValueChange={setPauseDuration}
                  >
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Select pause duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 6].map((month) => (
                        <SelectItem key={month} value={String(month)}>
                          {month} {month === 1 ? "month" : "months"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-3 rounded-lg bg-app-gray-50 flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-app-primary-blue shrink-0 mt-0.5" />
                  <p className="text-sm text-app-gray-900 opacity-80">
                    Your SIP will be automatically resumed after the pause period. 
                    You can resume it manually anytime before that.
                  </p>
                </div>

                <Button 
                  className="w-full border border-app-gray-300 bg-white text-app-gray-900"
                  onClick={handleSipPause}
                  disabled={isProcessing}
                >
                  Pause SIP
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold flex items-center mb-4 text-red-500">
                <SkipForward className="w-5 h-5 mr-2" />
                Cancel SIP
              </h3>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-red-50 flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-red-700 font-medium">Important Notice</p>
                    <p className="text-sm text-red-700 opacity-90 mt-1">
                      Cancelling the SIP will stop all future installments. Your existing investments will 
                      remain intact and continue to generate returns.
                    </p>
                  </div>
                </div>
              
                <Button 
                  className="w-full bg-white border border-red-300 text-red-500 hover:bg-red-50"
                  onClick={handleSipCancel}
                  disabled={isProcessing}
                >
                  Cancel SIP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-gray-200 shadow-md max-w-lg mx-auto">
        <Button 
          onClick={() => navigate(-1)} 
          className="w-full border border-app-gray-300 bg-white text-app-gray-900 py-6 rounded-xl"
        >
          Back to Portfolio
        </Button>
      </div>
    </div>
  );
};

export default ManageSIP;
