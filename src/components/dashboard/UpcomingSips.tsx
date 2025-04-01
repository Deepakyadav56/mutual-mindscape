
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface UpcomingSipsProps {
  data: {
    id: number;
    name: string;
    date: string;
    amount: number;
  }[];
}

export const UpcomingSips: React.FC<UpcomingSipsProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">Upcoming SIPs</CardTitle>
          <Link to="/portfolio/manage-sip" className="text-xs text-finance-primary flex items-center">
            Manage SIPs
            <ChevronRight className="h-3 w-3 ml-0.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {data.length > 0 ? (
          <div className="space-y-3">
            {data.map((sip) => (
              <div key={sip.id} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 flex items-center justify-center">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-800 truncate">{sip.name}</h4>
                  <p className="text-xs text-gray-500">{sip.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">
                    ₹{sip.amount.toLocaleString('en-IN')}
                  </p>
                  <Link 
                    to={`/portfolio/manage-sip/${sip.id}`}
                    className="text-xs text-finance-primary"
                  >
                    Modify
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <Calendar className="h-10 w-10 text-gray-400 mx-auto mb-2" />
            <h3 className="text-sm font-medium text-gray-700 mb-1">No Upcoming SIPs</h3>
            <p className="text-xs text-gray-500 mb-4">
              Start a SIP to invest regularly and build wealth
            </p>
            <Button variant="outline" className="text-xs">
              Setup New SIP
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
