
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CollectionCardProps {
  collection: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    color: string;
  };
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <Link to={collection.link} className="block h-full">
      <motion.div 
        className={`${collection.color} rounded-xl p-4 text-white shadow-md hover:shadow-xl transition-all duration-200 h-full flex flex-col justify-between relative overflow-hidden`}
        whileHover={{ 
          y: -5, 
          transition: { duration: 0.2 } 
        }}
      >
        <div className="flex justify-between items-start mb-2 relative z-10">
          <h3 className="font-bold text-sm">{collection.name}</h3>
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md shadow-sm">
            {collection.icon}
          </div>
        </div>
        
        <p className="text-xs opacity-90 mb-2 line-clamp-2 relative z-10">{collection.description}</p>
        
        <div className="flex items-center text-xs font-medium mt-auto group relative z-10">
          <span className="mr-1 group-hover:mr-2 transition-all duration-300">View all</span>
          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute top-1/3 -left-10 w-20 h-20 rounded-full bg-white/5 blur-lg"></div>
      </motion.div>
    </Link>
  );
};

export default CollectionCard;
