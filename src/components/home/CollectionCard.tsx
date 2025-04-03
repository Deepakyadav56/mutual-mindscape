
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
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
      <Card className={`border-0 overflow-hidden rounded-xl mb-3 relative ${collection.color} text-white shadow-md hover:shadow-lg transition-all duration-200`}>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg md:text-xl">{collection.name}</h3>
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              {collection.icon}
            </div>
          </div>
          
          <p className="text-sm opacity-90 mb-6">{collection.description}</p>
          
          <div className="flex items-center text-sm font-medium">
            <span className="mr-1">View all</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CollectionCard;
