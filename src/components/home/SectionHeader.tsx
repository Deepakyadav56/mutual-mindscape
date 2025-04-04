
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewMoreLink?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, viewMoreLink }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="w-1 h-5 bg-app-primary-green rounded-full mr-2"></div>
        <h2 className="text-lg font-bold text-app-black">{title}</h2>
      </div>
      {viewMoreLink && (
        <Link to={viewMoreLink} className="text-app-primary-green flex items-center text-sm font-medium transition-all hover:opacity-80">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
