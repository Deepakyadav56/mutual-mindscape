
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";
import { Calculator, ArrowLeftRight, ClipboardList, BarChart } from "lucide-react";

const tools = [
  {
    id: "sip-calculator",
    name: "SIP Calculator",
    icon: <Calculator className="h-6 w-6 text-app-green" />,
    link: "/tools/sip-calculator",
  },
  {
    id: "compare-funds",
    name: "Compare Funds",
    icon: <ArrowLeftRight className="h-6 w-6 text-app-green" />,
    link: "/tools/compare-funds",
  },
  {
    id: "import-funds",
    name: "Import Portfolio",
    icon: <ClipboardList className="h-6 w-6 text-app-green" />,
    link: "/tools/import-portfolio",
  },
  {
    id: "tax-calculator",
    name: "Tax Calculator",
    icon: <BarChart className="h-6 w-6 text-app-green" />,
    link: "/tools/tax-calculator",
  },
];

const ProductsTools = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Products & Tools" />
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tools.map((tool) => (
          <Link to={tool.link} key={tool.id}>
            <Card className="border-0 bg-app-dark-blue hover:bg-app-card-hover transition-all duration-200 rounded-xl shadow-md overflow-hidden h-full">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-24">
                <div className="mb-2">
                  {tool.icon}
                </div>
                <p className="text-sm font-medium text-white">{tool.name}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsTools;
