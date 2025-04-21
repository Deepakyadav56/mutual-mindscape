
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
        className={`${collection.color} rounded-xl p-4 text-white shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col justify-between`}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-sm">{collection.name}</h3>
          <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
            {collection.icon}
          </div>
        </div>
        
        <p className="text-xs opacity-90 mb-2 line-clamp-2">{collection.description}</p>
        
        <div className="flex items-center text-xs font-medium mt-auto">
          <span className="mr-1">View all</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </motion.div>
    </Link>
  );
};

export default CollectionCard;
