
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon, link, color }) => {
  return (
    <Link to={link} className="block mb-3">
      <Card className={`border-0 p-5 relative ${color} text-white overflow-hidden`}>
        <div className="absolute top-3 right-3 opacity-70">{icon}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-90 mb-6">{description}</p>
        <div className="flex items-center text-sm">
          <span className="mr-1">View all</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
