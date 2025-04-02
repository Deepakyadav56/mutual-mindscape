
import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5,
  className = "",
  size = 12
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, index) => (
        <Star 
          key={index}
          className={`${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"} mr-0.5`}
          size={size}
        />
      ))}
    </div>
  );
};

export default StarRating;
