
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
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
  // Map color classes to our new theme colors
  const getColorClass = (color: string) => {
    switch(color) {
      case 'bg-blue-500':
        return 'bg-gradient-to-r from-indigo-500 to-indigo-600';
      case 'bg-purple-500':
        return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'bg-orange-500':
        return 'bg-gradient-to-r from-amber-500 to-orange-500';
      case 'bg-green-500':
        return 'bg-gradient-to-r from-app-button-green to-teal-600';
      case 'bg-red-500':
        return 'bg-gradient-to-r from-rose-500 to-red-600';
      case 'bg-indigo-500':
        return 'bg-gradient-to-r from-blue-500 to-indigo-600';
      default:
        return collection.color;
    }
  };

  return (
    <Link to={collection.link}>
      <Card className={`border-0 overflow-hidden rounded-xl mb-3 h-28 relative ${getColorClass(collection.color)} shadow-md hover:shadow-lg transition-all duration-300`}>
        <CardContent className="p-4 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-white text-lg">{collection.name}</h3>
            <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              {collection.icon}
            </div>
          </div>
          
          <div className="flex justify-between items-end">
            <p className="text-xs text-white/90 max-w-[70%]">{collection.description}</p>
            <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CollectionCard;
