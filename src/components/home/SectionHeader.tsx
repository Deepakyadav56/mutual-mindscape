
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewMoreLink?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, viewMoreLink }) => {
  return (
    <div className="flex items-center justify-between mb-4 px-1">
      <h2 className="text-lg font-bold text-app-black relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-1/4 h-[3px] bg-app-primary-green rounded-full"></span>
      </h2>
      {viewMoreLink && (
        <Link to={viewMoreLink} className="text-app-primary-green flex items-center text-sm font-medium transition-all hover:opacity-80">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
