
import React, { useState } from "react";
import { ArrowLeft, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Reset link sent",
        description: "Please check your email for password reset instructions",
      });
      navigate("/auth/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-md mx-auto p-6">
        <div className="py-4">
          <button 
            onClick={() => navigate("/auth/login")} 
            className="flex items-center text-app-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-1" /> Back to login
          </button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-8 pb-8"
        >
          <h1 className="text-3xl font-bold text-app-gray-900 mb-2">Reset password</h1>
          <p className="text-app-gray-900/70">We'll send you a link to reset your password</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10 py-6 border-gray-200 input-modern"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6 bg-app-primary-blue hover:bg-app-primary-blue/90 py-6 rounded-xl btn-primary-modern"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send reset link"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
