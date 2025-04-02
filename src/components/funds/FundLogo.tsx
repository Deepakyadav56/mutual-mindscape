
import React from "react";

interface FundLogoProps {
  fundName: string;
  logoUrl?: string;
  bgColor?: string;
  className?: string;
}

const fundColors: Record<string, string> = {
  "HDFC": "#ED1C24",
  "SBI": "#22409A",
  "ICICI": "#F7931E",
  "Axis": "#97144D",
  "Nippon": "#EC1A23",
  "Kotak": "#ED1C24",
  "Aditya Birla": "#EF3E42",
  "UTI": "#0B3D91",
  "Tata": "#486AAE",
  "Motilal Oswal": "#F7941D",
  "Parag Parikh": "#8BC53F",
  "Quant": "#003A73",
  "Bandhan": "#EE3124",
  "Groww": "#5367FF",
  "Default": "#5367FF",
};

const getInitials = (name: string): string => {
  const parts = name.split(" ");
  
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  
  return parts[0].substr(0, 2).toUpperCase();
};

const getFundBrand = (name: string): string => {
  const brandNames = Object.keys(fundColors);
  for (const brand of brandNames) {
    if (name.includes(brand)) {
      return brand;
    }
  }
  return "Default";
};

const FundLogo: React.FC<FundLogoProps> = ({ 
  fundName, 
  logoUrl, 
  bgColor, 
  className = "" 
}) => {
  const brand = getFundBrand(fundName);
  const backgroundColor = bgColor || fundColors[brand] || fundColors.Default;
  
  if (logoUrl) {
    return (
      <div className={`fund-logo ${className}`}>
        <img 
          src={logoUrl} 
          alt={fundName} 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }
  
  // For known AMCs, use pre-defined logos or colors
  if (brand === "Motilal Oswal") {
    return (
      <div className={`fund-logo ${className}`} style={{ backgroundColor: "#FFF1DC" }}>
        <img 
          src="/lovable-uploads/62796efd-826f-451d-8da9-e602eda337ff.png" 
          alt="Motilal Oswal" 
          className="w-full h-full object-contain" 
        />
      </div>
    );
  }
  
  if (brand === "HDFC") {
    return (
      <div className={`fund-logo ${className}`} style={{ backgroundColor: "#ffffff" }}>
        <img 
          src="/lovable-uploads/a680dfd2-2444-4115-81a2-7520e0ba2dde.png" 
          alt="HDFC" 
          className="w-full h-full object-contain" 
        />
      </div>
    );
  }
  
  if (brand === "SBI") {
    return (
      <div className={`fund-logo ${className}`} style={{ backgroundColor: "#ffffff" }}>
        <img 
          src="/lovable-uploads/681c0e97-ebca-4176-b085-c6b040a8395d.png" 
          alt="SBI" 
          className="w-full h-full object-contain" 
        />
      </div>
    );
  }
  
  // Generic logo with initials
  return (
    <div 
      className={`fund-logo flex items-center justify-center ${className}`}
      style={{ backgroundColor }}
    >
      <span className="text-white font-bold text-sm">
        {getInitials(fundName)}
      </span>
    </div>
  );
};

export default FundLogo;
