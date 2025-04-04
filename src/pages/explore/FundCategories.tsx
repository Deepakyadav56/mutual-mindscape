
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, ChevronRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FundCategories = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "Equity",
      subcategories: [
        { name: "Large Cap", count: 45, returns: 15.7 },
        { name: "Mid Cap", count: 38, returns: 18.2 },
        { name: "Small Cap", count: 29, returns: 22.5 },
        { name: "Multi Cap", count: 52, returns: 16.8 },
        { name: "Large & Mid Cap", count: 33, returns: 17.3 },
        { name: "Focused Fund", count: 25, returns: 19.1 },
      ]
    },
    {
      name: "Debt",
      subcategories: [
        { name: "Liquid", count: 42, returns: 7.2 },
        { name: "Ultra Short Duration", count: 38, returns: 8.3 },
        { name: "Low Duration", count: 29, returns: 9.1 },
        { name: "Money Market", count: 26, returns: 7.5 },
        { name: "Corporate Bond", count: 28, returns: 10.2 },
      ]
    },
    {
      name: "Hybrid",
      subcategories: [
        { name: "Aggressive Hybrid", count: 32, returns: 14.5 },
        { name: "Conservative Hybrid", count: 28, returns: 11.2 },
        { name: "Balanced Advantage", count: 22, returns: 13.8 },
        { name: "Multi Asset Allocation", count: 18, returns: 12.4 },
        { name: "Equity Savings", count: 24, returns: 10.8 },
      ]
    },
    {
      name: "Other Categories",
      subcategories: [
        { name: "Index Funds", count: 35, returns: 16.2 },
        { name: "International", count: 26, returns: 13.7 },
        { name: "Sectoral/Thematic", count: 48, returns: 20.4 },
        { name: "ELSS (Tax Saving)", count: 30, returns: 17.8 },
        { name: "Solution Oriented", count: 22, returns: 15.1 },
        { name: "Fund of Funds", count: 18, returns: 12.6 },
      ]
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            Fund Categories
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            className="pl-10 bg-gray-50 border-gray-200" 
            placeholder="Search fund categories"
          />
        </div>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <h2 className="text-lg font-bold mb-3">{category.name} Funds</h2>
              <div className="space-y-3">
                {category.subcategories.map((subcategory) => (
                  <Link 
                    key={subcategory.name} 
                    to={`/explore/category/${category.name.toLowerCase()}-${subcategory.name.toLowerCase().replace(/ /g, '-')}`}
                  >
                    <Card className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition duration-200">
                      <CardContent className="p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{subcategory.name}</h3>
                            <p className="text-xs text-gray-500">{subcategory.count} funds</p>
                          </div>
                          <div className="flex items-center">
                            <div className="text-right mr-3">
                              <p className="text-xs text-gray-500">1Y Returns</p>
                              <p className="text-green-600 font-medium flex items-center justify-end">
                                <TrendingUp className="h-3 w-3 mr-1" /> {subcategory.returns}%
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FundCategories;
