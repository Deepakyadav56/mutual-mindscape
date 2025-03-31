
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff, ArrowRight, Mail, Lock, Smartphone } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "mobile">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Check if user has completed KYC
      const hasCompletedKYC = false; // This would be determined by your auth system
      
      toast({
        title: "Login successful",
        description: "Welcome back to WealthWise",
      });
      
      if (hasCompletedKYC) {
        navigate("/dashboard");
      } else {
        navigate("/kyc"); // Redirect to KYC if not completed
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-md mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-14 pb-8"
        >
          <h1 className="text-3xl font-bold text-app-gray-900 mb-2">Welcome back</h1>
          <p className="text-app-gray-900/70">Login to manage your investments</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Tabs defaultValue="email" className="mb-8" onValueChange={(value) => setLoginMethod(value as "email" | "mobile")}>
            <TabsList className="grid grid-cols-2 w-full bg-app-light-blue">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            
            <form onSubmit={handleLogin}>
              <TabsContent value="email" className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10 py-6 border-gray-200 input-modern"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/auth/forgot-password" className="text-sm text-app-primary-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 py-6 border-gray-200 input-modern"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="10-digit mobile number"
                      className="pl-10 py-6 border-gray-200 input-modern"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/auth/forgot-password" className="text-sm text-app-primary-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 py-6 border-gray-200 input-modern"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </TabsContent>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-app-gray-900/70"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="text-app-primary-blue hover:underline">
                    terms and conditions
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-app-primary-blue hover:bg-app-primary-blue/90 py-6 rounded-xl btn-primary-modern"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Tabs>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-app-gray-900/70">
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-app-primary-blue font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
