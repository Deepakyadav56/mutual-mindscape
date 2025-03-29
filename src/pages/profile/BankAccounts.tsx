
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Plus, Trash2, Check, AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const BankAccounts = () => {
  const navigate = useNavigate();
  const [banks, setBanks] = useState([
    {
      id: "1",
      bankName: "HDFC Bank",
      accountNumber: "XXXX1234",
      ifscCode: "HDFC0001234",
      accountHolder: "Rahul Sharma",
      isPrimary: true,
      isVerified: true
    },
    {
      id: "2",
      bankName: "ICICI Bank",
      accountNumber: "XXXX5678",
      ifscCode: "ICIC0005678",
      accountHolder: "Rahul Sharma",
      isPrimary: false,
      isVerified: true
    }
  ]);

  const handleDelete = (id: string) => {
    if (banks.find(bank => bank.id === id)?.isPrimary) {
      toast({
        title: "Cannot delete primary bank",
        description: "Please set another bank as primary before deleting this one",
        variant: "destructive"
      });
      return;
    }
    
    setBanks(banks.filter(bank => bank.id !== id));
    toast({
      title: "Bank account removed",
      description: "Bank account has been removed successfully"
    });
  };

  const handleSetPrimary = (id: string) => {
    setBanks(banks.map(bank => ({
      ...bank,
      isPrimary: bank.id === id
    })));
    
    toast({
      title: "Primary bank updated",
      description: "Your primary bank account has been updated"
    });
  };

  const addNewBank = () => {
    navigate("/profile/add-bank");
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-app-mint z-10">
        <div className="flex items-center p-4 border-b border-app-light-mint">
          <button onClick={() => navigate(-1)} className="text-app-charcoal">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-charcoal ml-4">
            Bank Accounts
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm text-app-charcoal opacity-80">
            Bank accounts are used for receiving redemption proceeds.
          </p>
        </div>
        
        {banks.length > 0 ? (
          <div className="space-y-4 mb-6">
            {banks.map((bank) => (
              <Card key={bank.id} className="border-app-light-mint">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="font-medium text-app-charcoal">{bank.bankName}</h3>
                        {bank.isPrimary && (
                          <span className="ml-2 text-xs px-2 py-0.5 bg-app-light-mint text-app-charcoal rounded-full">
                            Primary
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-app-charcoal">A/C: {bank.accountNumber}</p>
                      <p className="text-sm text-app-charcoal">IFSC: {bank.ifscCode}</p>
                      <p className="text-sm text-app-charcoal">{bank.accountHolder}</p>
                      
                      <div className="flex items-center mt-2">
                        {bank.isVerified ? (
                          <div className="flex items-center text-green-600 text-xs">
                            <Check className="h-3 w-3 mr-1" />
                            <span>Verified</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-amber-600 text-xs">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            <span>Pending verification</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      {!bank.isPrimary && (
                        <>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-app-charcoal border-app-light-mint text-xs px-2"
                            onClick={() => handleSetPrimary(bank.id)}
                          >
                            Set as Primary
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-red-600 border-app-light-mint text-xs px-2"
                            onClick={() => handleDelete(bank.id)}
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-dashed border-2 border-app-light-mint mb-6">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <p className="text-app-charcoal mb-4 text-center">
                No bank accounts added yet
              </p>
              <Button 
                variant="outline" 
                className="border-app-charcoal text-app-charcoal"
                onClick={addNewBank}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Bank Account
              </Button>
            </CardContent>
          </Card>
        )}
        
        <Card className="bg-app-light-mint border-0 mb-6">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-app-charcoal shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-app-charcoal mb-1">Important Note</h3>
                <ul className="text-sm text-app-charcoal space-y-2 list-disc pl-4">
                  <li>Bank account should be in the same name as your KYC.</li>
                  <li>Redemption proceeds will be credited to your primary bank account.</li>
                  <li>Bank verification may take 2-3 working days.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-app-light-mint">
        <Button 
          onClick={addNewBank} 
          className="w-full bg-app-charcoal text-app-mint py-6 rounded-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Bank Account
        </Button>
      </div>
    </div>
  );
};

export default BankAccounts;
