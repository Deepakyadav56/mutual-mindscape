
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
      <Card className={cn(
        "border-0 p-5 relative overflow-hidden transition-transform duration-200 hover:scale-[1.02]", 
        color, 
        "text-white dark:shadow-md dark:shadow-teal-900/20"
      )}>
        <div className="absolute top-3 right-3 opacity-70">{icon}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-90 mb-6 max-w-[80%]">{description}</p>
        <div className="flex items-center text-sm group">
          <span className="mr-2 group-hover:mr-3 transition-all">View all</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
