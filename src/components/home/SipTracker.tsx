
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SIPList = [
  {
    id: 1,
    name: "Nippon India Large Cap Fund Direct Growth",
    logo: "https://groww.in/images/partners/nippon_groww.svg",
    amount: "₹1,000",
    dueDate: 4,
    dueMonth: "Apr",
    dueDay: 8
  },
  {
    id: 2,
    name: "Bandhan Small Cap Fund Direct Growth",
    logo: "https://groww.in/images/partners/bandhan_groww.svg",
    amount: "₹1,000",
    dueDate: 5,
    dueMonth: "Apr",
    dueDay: 9
  },
  {
    id: 3,
    name: "Motilal Oswal Midcap Fund Direct Growth",
    logo: "https://groww.in/images/partners/motilal_groww.svg",
    amount: "₹1,000",
    dueDate: 5,
    dueMonth: "Apr",
    dueDay: 9
  }
];

const SipTracker = () => {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-1 h-5 bg-app-primary-green rounded-full mr-2"></div>
          <h2 className="text-lg font-bold text-app-black">Active SIPs (3)</h2>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          Sort by: Due date
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl mb-4">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold">₹3,000</h3>
          <span className="text-sm text-gray-600 ml-2">Monthly SIP amount</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          Maintain <span className="font-medium mx-1">₹3,000</span> in your bank account for upcoming instalments in next 5 days.
          <Link to="/bank-account" className="text-app-primary-green ml-1">
            Check balance
          </Link>
        </div>
      </div>
      
      <div className="space-y-2">
        {SIPList.map((sip) => (
          <Link to={`/funds/${sip.id}`} key={sip.id}>
            <Card className="hover:shadow-md transition-all duration-200">
              <CardContent className="p-0">
                <div className="p-4 flex items-center gap-3">
                  <div className="h-12 w-12 flex-shrink-0">
                    <img src={sip.logo} alt={sip.name} className="h-full w-full object-contain" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm mb-1 line-clamp-2">{sip.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium text-gray-900 mr-2">{sip.amount}</span>
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-gray-500" />
                        Due in {sip.dueDate} days
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-2 text-center min-w-[50px]">
                    <div className="text-xl font-bold">{sip.dueDay}</div>
                    <div className="text-xs text-gray-600">{sip.dueMonth}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SipTracker;
