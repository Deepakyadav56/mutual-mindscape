
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewMoreLink?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, viewMoreLink }) => {
  return (
    <div className="flex items-center justify-between mb-3 px-1">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      {viewMoreLink && (
        <Link to={viewMoreLink} className="text-app-green flex items-center text-sm">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
