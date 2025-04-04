
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <Link to={collection.link}>
      <div className={`${collection.color} rounded-xl p-5 text-white shadow-sm hover:shadow-md transition-all duration-200 h-full`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl">{collection.name}</h3>
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              {collection.icon}
            </div>
          </div>
          
          <p className="text-sm opacity-90 mb-auto">{collection.description}</p>
          
          <div className="flex items-center text-sm font-medium mt-4">
            <span className="mr-1">View all</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
