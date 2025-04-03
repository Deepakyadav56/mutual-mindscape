
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Calculator, ArrowLeftRight, ClipboardList, BarChart } from "lucide-react";

const tools = [
  {
    id: "sip-calculator",
    name: "SIP Calculator",
    icon: <Calculator className="h-6 w-6 text-white" />,
    link: "/tools/sip-calculator",
    color: "bg-indigo-600"
  },
  {
    id: "compare-funds",
    name: "Compare Funds",
    icon: <ArrowLeftRight className="h-6 w-6 text-white" />,
    link: "/tools/compare-funds",
    color: "bg-teal-600"
  },
  {
    id: "import-funds",
    name: "Import Portfolio",
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    link: "/tools/import-portfolio",
    color: "bg-amber-600"
  },
  {
    id: "tax-calculator",
    name: "Tax Calculator",
    icon: <BarChart className="h-6 w-6 text-white" />,
    link: "/tools/tax-calculator",
    color: "bg-cyan-600"
  },
];

const ProductsTools = () => {
  return (
    <>
      {tools.map((tool) => (
        <Link to={tool.link} key={tool.id}>
          <Card className={`border-0 ${tool.color} text-white transition-all duration-200 rounded-xl shadow-md overflow-hidden h-full`}>
            <div className="p-5 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-2">
                {tool.icon}
              </div>
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ProductsTools;
