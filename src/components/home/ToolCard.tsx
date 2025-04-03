
import React from "react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, icon, link }) => {
  return (
    <Link to={link} className="block">
      <div className="tool-card">
        <div className="text-app-button-green">{icon}</div>
        <span className="text-center">{title}</span>
      </div>
    </Link>
  );
};

export default ToolCard;
