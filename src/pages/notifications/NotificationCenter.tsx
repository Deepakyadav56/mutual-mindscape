
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Bell, 
  CheckCircle, 
  FileText, 
  TrendingUp, 
  Calendar, 
  MoreVertical,
  Info,
  AlertTriangle,
  GiftIcon,
  CheckCheck
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  time: string;
  type: "transaction" | "sip" | "market" | "account" | "promo";
  read: boolean;
  actionUrl?: string;
  actionText?: string;
};

const NotificationCenter = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "SIP Payment Successful",
      message: "Your SIP payment of ₹5,000 for HDFC Top 100 Fund has been processed successfully.",
      date: "Today",
      time: "10:30 AM",
      type: "transaction",
      read: false,
      actionUrl: "/portfolio/fund/1",
      actionText: "View Investment"
    },
    {
      id: "2",
      title: "Upcoming SIP Reminder",
      message: "Your SIP payment of ₹5,000 for Aditya Birla Frontline Equity Fund is scheduled for tomorrow.",
      date: "Today",
      time: "9:15 AM",
      type: "sip",
      read: false
    },
    {
      id: "3",
      title: "Market Update",
      message: "Market hit an all-time high today. Check your portfolio performance.",
      date: "Yesterday",
      time: "4:45 PM",
      type: "market",
      read: true,
      actionUrl: "/portfolio",
      actionText: "View Portfolio"
    },
    {
      id: "4",
      title: "KYC Update Required",
      message: "Please update your address proof as per the new regulatory guidelines.",
      date: "April 2, 2025",
      time: "11:20 AM",
      type: "account",
      read: true,
      actionUrl: "/kyc",
      actionText: "Update KYC"
    },
    {
      id: "5",
      title: "New Fund Alert",
      message: "ICICI Prudential Technology Fund has been launched. Explore this sector opportunity.",
      date: "April 1, 2025",
      time: "3:30 PM",
      type: "market",
      read: true,
      actionUrl: "/funds/tech-fund",
      actionText: "Explore Fund"
    },
    {
      id: "6",
      title: "Refer & Earn Bonus",
      message: "Invite friends to WealthWise and earn ₹500 when they make their first investment.",
      date: "March 30, 2025",
      time: "2:15 PM",
      type: "promo",
      read: true,
      actionUrl: "/refer",
      actionText: "Invite Friends"
    },
    {
      id: "7",
      title: "SIP Investment Processed",
      message: "Your SIP investment of ₹2,500 in Mirae Asset Emerging Bluechip Fund has been processed.",
      date: "March 28, 2025",
      time: "10:00 AM",
      type: "transaction",
      read: true,
      actionUrl: "/transactions",
      actionText: "View Transaction"
    },
    {
      id: "8",
      title: "Dividend Credited",
      message: "Dividend of ₹1,250 from HDFC Dividend Yield Fund has been credited to your bank account.",
      date: "March 25, 2025",
      time: "5:30 PM",
      type: "transaction",
      read: true
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    toast({
      title: "Notifications",
      description: "All notifications marked as read",
    });
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
    toast({
      title: "Notification deleted",
      description: "Notification has been removed",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "transaction":
        return <FileText className="h-5 w-5 text-app-primary-blue" />;
      case "sip":
        return <Calendar className="h-5 w-5 text-app-primary-green" />;
      case "market":
        return <TrendingUp className="h-5 w-5 text-purple-600" />;
      case "account":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "promo":
        return <GiftIcon className="h-5 w-5 text-pink-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  // Filter notifications by type for tabs
  const allNotifications = notifications;
  const transactionNotifications = notifications.filter(n => n.type === "transaction");
  const sipNotifications = notifications.filter(n => n.type === "sip");
  const marketNotifications = notifications.filter(n => n.type === "market" || n.type === "promo");
  const accountNotifications = notifications.filter(n => n.type === "account");

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="text-app-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold text-app-gray-900 ml-4 flex items-center">
              Notifications
              {unreadCount > 0 && (
                <span className="ml-2 bg-app-primary-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </h1>
          </div>
          
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="text-app-primary-green text-sm font-medium"
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>

      <Tabs defaultValue="all" className="p-4">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="all" className="text-xs">
            All
            {allNotifications.length > 0 && (
              <span className="ml-1 text-xs">{allNotifications.length}</span>
            )}
          </TabsTrigger>
          <TabsTrigger value="transactions" className="text-xs">
            Transactions
            {transactionNotifications.length > 0 && (
              <span className="ml-1 text-xs">{transactionNotifications.length}</span>
            )}
          </TabsTrigger>
          <TabsTrigger value="sips" className="text-xs">
            SIPs
            {sipNotifications.length > 0 && (
              <span className="ml-1 text-xs">{sipNotifications.length}</span>
            )}
          </TabsTrigger>
          <TabsTrigger value="market" className="text-xs">
            Market
            {marketNotifications.length > 0 && (
              <span className="ml-1 text-xs">{marketNotifications.length}</span>
            )}
          </TabsTrigger>
          <TabsTrigger value="account" className="text-xs">
            Account
            {accountNotifications.length > 0 && (
              <span className="ml-1 text-xs">{accountNotifications.length}</span>
            )}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <NotificationList 
            notifications={allNotifications} 
            markAsRead={markAsRead}
            deleteNotification={deleteNotification}
            getNotificationIcon={getNotificationIcon}
            navigate={navigate}
          />
        </TabsContent>
        
        <TabsContent value="transactions">
          <NotificationList 
            notifications={transactionNotifications} 
            markAsRead={markAsRead}
            deleteNotification={deleteNotification}
            getNotificationIcon={getNotificationIcon}
            navigate={navigate}
          />
        </TabsContent>
        
        <TabsContent value="sips">
          <NotificationList 
            notifications={sipNotifications} 
            markAsRead={markAsRead}
            deleteNotification={deleteNotification}
            getNotificationIcon={getNotificationIcon}
            navigate={navigate}
          />
        </TabsContent>
        
        <TabsContent value="market">
          <NotificationList 
            notifications={marketNotifications} 
            markAsRead={markAsRead}
            deleteNotification={deleteNotification}
            getNotificationIcon={getNotificationIcon}
            navigate={navigate}
          />
        </TabsContent>
        
        <TabsContent value="account">
          <NotificationList 
            notifications={accountNotifications} 
            markAsRead={markAsRead}
            deleteNotification={deleteNotification}
            getNotificationIcon={getNotificationIcon}
            navigate={navigate}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface NotificationListProps {
  notifications: Notification[];
  markAsRead: (id: string) => void;
  deleteNotification: (id: string) => void;
  getNotificationIcon: (type: string) => React.ReactNode;
  navigate: (path: string) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  markAsRead,
  deleteNotification,
  getNotificationIcon,
  navigate
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Bell className="h-12 w-12 text-gray-300 mb-4" />
        <p className="text-gray-500 text-center mb-2">No notifications</p>
        <p className="text-gray-400 text-sm text-center">Check back later for updates</p>
      </div>
    );
  }

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {notifications.map((notification) => (
        <motion.div
          key={notification.id}
          variants={itemVariants}
          className={`border rounded-lg p-4 ${
            notification.read ? "bg-white" : "bg-blue-50 border-blue-100"
          }`}
          onClick={() => {
            if (!notification.read) markAsRead(notification.id);
            if (notification.actionUrl) navigate(notification.actionUrl);
          }}
        >
          <div className="flex">
            <div className="mr-3 mt-1">
              {getNotificationIcon(notification.type)}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-medium ${!notification.read && "text-app-primary-blue"}`}>
                    {notification.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {!notification.read && (
                      <DropdownMenuItem 
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsRead(notification.id);
                        }}
                      >
                        <CheckCheck className="h-4 w-4 mr-2" /> Mark as read
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem 
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notification.id);
                      }}
                      className="text-red-500"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-gray-500">
                  {notification.date} • {notification.time}
                </div>
                
                {notification.actionUrl && notification.actionText && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-app-primary-green px-2 py-0 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!notification.read) markAsRead(notification.id);
                      navigate(notification.actionUrl!);
                    }}
                  >
                    {notification.actionText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NotificationCenter;
