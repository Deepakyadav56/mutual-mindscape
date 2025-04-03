
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      <div className={`category-card ${color}`}>
        <div className="category-card-icon">{icon}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-90 mb-6">{description}</p>
        <div className="category-card-arrow">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
