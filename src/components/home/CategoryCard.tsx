
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      <motion.div
        whileHover={{ scale: 1.03, y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className={cn(
          "border-0 p-6 relative overflow-hidden transition-all duration-300", 
          color, 
          "text-white shadow-lg dark:shadow-xl dark:shadow-teal-900/20 rounded-2xl"
        )}>
          <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-xl">{icon}</div>
          <h3 className="text-xl font-bold mb-2 mt-1">{title}</h3>
          <p className="text-sm opacity-90 mb-8 max-w-[85%] line-clamp-2">{description}</p>
          <div className="flex items-center text-sm font-medium group">
            <span className="mr-2 group-hover:mr-3 transition-all duration-300">View all</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute top-1/2 -right-10 w-16 h-16 rounded-full bg-white/5 blur-xl"></div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
