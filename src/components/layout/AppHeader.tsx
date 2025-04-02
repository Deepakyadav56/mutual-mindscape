
import React from "react";
import { Bell, QrCode, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AppHeader: React.FC = () => {
  return (
    <header className="bg-app-groww-bg-dark py-3 sticky top-0 z-10 border-b border-app-groww-border-dark">
      <div className="max-w-lg mx-auto px-4 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-app-groww-blue to-app-groww-green flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-app-groww-bg-dark flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-app-groww-blue to-app-groww-green"></div>
            </div>
          </div>
          <span className="ml-2 text-lg font-medium text-white">Mutual Funds</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white" asChild>
            <Link to="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white" asChild>
            <Link to="/qr-code">
              <QrCode className="h-5 w-5" />
            </Link>
          </Button>
          
          <Link to="/profile" className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 text-white flex items-center justify-center">
              <img src="/lovable-uploads/83bfd7e7-554a-407d-891c-f5eed9286d4b.png" alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
