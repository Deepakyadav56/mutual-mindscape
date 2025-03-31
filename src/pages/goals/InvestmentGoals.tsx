
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, Home, GraduationCap, Car, Plane, Heart, Umbrella, PiggyBank, Target, ChevronRight, Info } from "lucide-react";

const InvestmentGoals = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState("");
  const [goalDetails, setGoalDetails] = useState({
    name: "",
    targetAmount: 100000,
    duration: 5,
    monthlyInvestment: 0,
  });
  
  // Calculate estimated monthly investment based on target amount and duration
  React.useEffect(() => {
    // Simple calculation (without considering returns)
    // In a real app, this would use a more complex formula with expected returns
    const monthlyAmount = Math.round(goalDetails.targetAmount / (goalDetails.duration * 12));
    setGoalDetails(prev => ({ ...prev, monthlyInvestment: monthlyAmount }));
  }, [goalDetails.targetAmount, goalDetails.duration]);
  
  const goals = [
    { id: "home", name: "Buy a Home", icon: <Home className="h-6 w-6" />, color: "bg-blue-100 text-blue-600" },
    { id: "education", name: "Education", icon: <GraduationCap className="h-6 w-6" />, color: "bg-purple-100 text-purple-600" },
    { id: "car", name: "Buy a Car", icon: <Car className="h-6 w-6" />, color: "bg-green-100 text-green-600" },
    { id: "vacation", name: "Vacation", icon: <Plane className="h-6 w-6" />, color: "bg-amber-100 text-amber-600" },
    { id: "wedding", name: "Wedding", icon: <Heart className="h-6 w-6" />, color: "bg-pink-100 text-pink-600" },
    { id: "retirement", name: "Retirement", icon: <Umbrella className="h-6 w-6" />, color: "bg-indigo-100 text-indigo-600" },
    { id: "savings", name: "Savings", icon: <PiggyBank className="h-6 w-6" />, color: "bg-cyan-100 text-cyan-600" },
    { id: "custom", name: "Custom Goal", icon: <Target className="h-6 w-6" />, color: "bg-gray-100 text-gray-600" },
  ];

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    const selectedGoalItem = goals.find(g => g.id === goalId);
    if (selectedGoalItem) {
      setGoalDetails(prev => ({ 
        ...prev, 
        name: goalId === "custom" ? "" : selectedGoalItem.name 
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGoalDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setGoalDetails(prev => ({ ...prev, [name]: value[0] }));
  };

  const handleCreateGoal = () => {
    toast({
      title: "Goal Created",
      description: `Your investment goal "${goalDetails.name || goals.find(g => g.id === selectedGoal)?.name}" has been created.`,
    });
    
    navigate("/dashboard");
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="flex items-center px-4 py-6 bg-white shadow-sm">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft className="h-5 w-5 text-app-gray-900" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-app-gray-900">Investment Goals</h1>
          <p className="text-sm text-app-gray-900/70">Plan your future investments</p>
        </div>
      </div>

      <div className="container max-w-md mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {!selectedGoal ? (
            <>
              <h2 className="text-xl font-bold text-app-gray-900 mb-2">Select a Goal</h2>
              <p className="text-sm text-app-gray-900/70 mb-6">What are you saving for?</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {goals.map((goal) => (
                  <Card 
                    key={goal.id}
                    className={`border cursor-pointer hover:border-app-primary-blue/40 hover:shadow-md transition-all ${
                      selectedGoal === goal.id ? "border-app-primary-blue shadow-md" : ""
                    }`}
                    onClick={() => handleGoalSelect(goal.id)}
                  >
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-3 ${goal.color}`}>
                        {goal.icon}
                      </div>
                      <p className="font-medium text-app-gray-900">{goal.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              <button 
                onClick={() => setSelectedGoal("")}
                className="flex items-center text-app-primary-blue mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to goals
              </button>
              
              <h2 className="text-xl font-bold text-app-gray-900 mb-6">
                {selectedGoal === "custom" ? "Custom Goal" : goals.find(g => g.id === selectedGoal)?.name}
              </h2>
              
              <div className="space-y-8">
                {selectedGoal === "custom" && (
                  <div className="space-y-3">
                    <Label htmlFor="name">Goal Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name your goal"
                      className="py-6 border-gray-200"
                      value={goalDetails.name}
                      onChange={handleInputChange}
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <Label htmlFor="targetAmount">Target Amount</Label>
                  <Input
                    id="targetAmount"
                    name="targetAmount"
                    type="number"
                    className="py-6 border-gray-200"
                    value={goalDetails.targetAmount}
                    onChange={handleInputChange}
                  />
                  <Slider
                    defaultValue={[goalDetails.targetAmount]}
                    min={10000}
                    max={10000000}
                    step={10000}
                    value={[goalDetails.targetAmount]}
                    onValueChange={(value) => handleSliderChange("targetAmount", value)}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-app-gray-900/70">
                    <span>₹10,000</span>
                    <span>₹1 Crore</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="duration">Time Horizon (Years)</Label>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-app-gray-900">{goalDetails.duration} years</span>
                  </div>
                  <Slider
                    defaultValue={[goalDetails.duration]}
                    min={1}
                    max={30}
                    step={1}
                    value={[goalDetails.duration]}
                    onValueChange={(value) => handleSliderChange("duration", value)}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-app-gray-900/70">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                <Card className="border-app-light-mint bg-app-light-mint/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-app-gray-900">Monthly Investment</h3>
                      <Info className="h-4 w-4 text-app-gray-900/70" />
                    </div>
                    <p className="text-3xl font-bold text-app-primary-blue mb-1">
                      {formatCurrency(goalDetails.monthlyInvestment)}
                    </p>
                    <p className="text-xs text-app-gray-900/70">
                      Estimated monthly investment needed to reach your goal
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-100 bg-amber-50">
                  <CardContent className="p-4 text-sm">
                    <p className="text-amber-800">
                      This is an estimate based on a standard annual return of 12%. 
                      Actual returns may vary based on market conditions and fund performance.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Button
                onClick={handleCreateGoal}
                className="w-full mt-8 bg-app-primary-blue hover:bg-app-primary-blue/90 py-6 rounded-xl"
              >
                Create Goal
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentGoals;
