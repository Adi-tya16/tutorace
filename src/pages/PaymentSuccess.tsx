import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Your tutoring session has been booked successfully. 
          You'll receive a confirmation email shortly.
        </p>
        {sessionId && (
          <p className="text-sm text-muted-foreground mb-4">
            Session ID: {sessionId}
          </p>
        )}
        <Button onClick={() => navigate("/")} className="w-full">
          Return to Home
        </Button>
      </Card>
    </div>
  );
};

export default PaymentSuccess;