
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, CheckCheck, Gift, TrendingUp, Wallet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const NotificationCenter = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  
  const notificationData = {
    all: [
      {
        id: 1,
        type: "transaction",
        title: "SIP Completed",
        description: "Your SIP of ₹5,000 in HDFC Small Cap Fund was processed successfully.",
        time: "2 hours ago",
        icon: <Wallet className="h-5 w-5 text-app-primary-blue" />,
      },
      {
        id: 2,
        type: "portfolio",
        title: "Portfolio Growth",
        description: "Your portfolio has grown by 2.3% in the last week.",
        time: "Yesterday",
        icon: <TrendingUp className="h-5 w-5 text-app-primary-green" />,
      },
      {
        id: 3,
        type: "offer",
        title: "New Offer Available",
        description: "Get zero commission on your next mutual fund investment.",
        time: "2 days ago",
        icon: <Gift className="h-5 w-5 text-purple-500" />,
      },
    ],
    transactions: [
      {
        id: 1,
        type: "transaction",
        title: "SIP Completed",
        description: "Your SIP of ₹5,000 in HDFC Small Cap Fund was processed successfully.",
        time: "2 hours ago",
        icon: <Wallet className="h-5 w-5 text-app-primary-blue" />,
      },
      {
        id: 4,
        type: "transaction",
        title: "Redemption Processed",
        description: "Your redemption request for Axis Bluechip Fund has been processed.",
        time: "5 days ago",
        icon: <Wallet className="h-5 w-5 text-app-primary-blue" />,
      },
    ],
    portfolio: [
      {
        id: 2,
        type: "portfolio",
        title: "Portfolio Growth",
        description: "Your portfolio has grown by 2.3% in the last week.",
        time: "Yesterday",
        icon: <TrendingUp className="h-5 w-5 text-app-primary-green" />,
      },
    ],
    offers: [
      {
        id: 3,
        type: "offer",
        title: "New Offer Available",
        description: "Get zero commission on your next mutual fund investment.",
        time: "2 days ago",
        icon: <Gift className="h-5 w-5 text-purple-500" />,
      },
    ],
  };

  const markAllAsRead = () => {
    toast({
      title: "All notifications marked as read",
      description: "Your notification center has been cleared.",
    });
  };

  return (
    <div className="min-h-screen bg-app-gray-50">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft className="h-5 w-5 text-app-gray-900" />
            </button>
            <h1 className="text-xl font-semibold text-app-gray-900">Notifications</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllAsRead}
            className="text-app-primary-blue"
          >
            <CheckCheck className="h-4 w-4 mr-1" />
            Mark all read
          </Button>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-app-gray-50 p-1">
            <TabsTrigger value="all" className="rounded-md">All</TabsTrigger>
            <TabsTrigger value="transactions" className="rounded-md">Transactions</TabsTrigger>
            <TabsTrigger value="portfolio" className="rounded-md">Portfolio</TabsTrigger>
            <TabsTrigger value="offers" className="rounded-md">Offers</TabsTrigger>
          </TabsList>
        
          <div className="p-4">
            <TabsContent value="all" className="mt-0 space-y-4">
              {notificationData.all.length > 0 ? (
                notificationData.all.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              ) : (
                <EmptyState type="all" />
              )}
            </TabsContent>
            
            <TabsContent value="transactions" className="mt-0 space-y-4">
              {notificationData.transactions.length > 0 ? (
                notificationData.transactions.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              ) : (
                <EmptyState type="transactions" />
              )}
            </TabsContent>
            
            <TabsContent value="portfolio" className="mt-0 space-y-4">
              {notificationData.portfolio.length > 0 ? (
                notificationData.portfolio.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              ) : (
                <EmptyState type="portfolio" />
              )}
            </TabsContent>
            
            <TabsContent value="offers" className="mt-0 space-y-4">
              {notificationData.offers.length > 0 ? (
                notificationData.offers.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              ) : (
                <EmptyState type="offers" />
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

// Helper components
const NotificationCard = ({ notification }: { notification: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex items-start p-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-1">
              {notification.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-app-gray-900 mb-1">{notification.title}</h3>
              <p className="text-sm text-app-gray-900/70 mb-2">{notification.description}</p>
              <p className="text-xs text-app-gray-900/50">{notification.time}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EmptyState = ({ type }: { type: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-app-light-blue flex items-center justify-center mb-4">
        <Bell className="h-8 w-8 text-app-primary-blue" />
      </div>
      <h3 className="text-lg font-medium text-app-gray-900 mb-2">No {type} notifications</h3>
      <p className="text-sm text-app-gray-900/70 max-w-xs">
        {type === "all" 
          ? "You don't have any notifications yet." 
          : `You don't have any ${type} notifications yet.`}
      </p>
    </div>
  );
};

export default NotificationCenter;
