
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
  return (
    <Link to={collection.link}>
      <Card className={`border-0 overflow-hidden rounded-xl mb-3 h-28 relative ${collection.color}`}>
        <CardContent className="p-4 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-white text-lg">{collection.name}</h3>
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              {collection.icon}
            </div>
          </div>
          
          <div className="flex justify-between items-end">
            <p className="text-xs text-white/80 max-w-[70%]">{collection.description}</p>
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CollectionCard;
