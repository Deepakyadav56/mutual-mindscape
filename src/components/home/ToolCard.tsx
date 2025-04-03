
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, icon, link }) => {
  return (
    <Link to={link} className="block">
      <Card className="p-4 text-center border-app-mint hover:shadow-md transition-all duration-200 flex flex-col items-center space-y-2">
        <div className="h-12 w-12 rounded-full bg-app-light-mint flex items-center justify-center text-app-button-green">
          {icon}
        </div>
        <span className="text-sm font-medium">{title}</span>
      </Card>
    </Link>
  );
};

export default ToolCard;
