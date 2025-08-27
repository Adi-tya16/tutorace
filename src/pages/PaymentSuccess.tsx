import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const sessionId = searchParams.get('session_id');
  
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setVerificationStatus('failed');
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('verify-payment', {
          body: { sessionId }
        });

        if (error) throw error;

        if (data.success && data.paymentStatus === 'paid') {
          setVerificationStatus('success');
          setPaymentDetails(data);
          toast({
            title: "Payment Verified!",
            description: `Your tutoring session with ${data.tutorName} has been confirmed.`,
          });
        } else {
          setVerificationStatus('failed');
          toast({
            title: "Payment Failed",
            description: "Your payment could not be verified. Please contact support.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Payment verification error:', error);
        setVerificationStatus('failed');
        toast({
          title: "Verification Error",
          description: "Unable to verify payment. Please contact support.",
          variant: "destructive",
        });
      }
    };

    verifyPayment();
  }, [sessionId, toast]);

  if (verificationStatus === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-6 text-center">
          <div className="flex justify-center mb-4">
            <Loader2 className="h-16 w-16 text-primary animate-spin" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Verifying Payment...</h1>
          <p className="text-muted-foreground">
            Please wait while we confirm your payment.
          </p>
        </Card>
      </div>
    );
  }

  if (verificationStatus === 'failed') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-6 text-center">
          <div className="flex justify-center mb-4">
            <XCircle className="h-16 w-16 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Payment Verification Failed</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't verify your payment. Please contact support if you believe this is an error.
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
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Your tutoring session with {paymentDetails?.tutorName} has been confirmed! 
          You'll receive a confirmation email shortly.
        </p>
        <div className="space-y-2 mb-6">
          <p className="text-sm"><strong>Tutor:</strong> {paymentDetails?.tutorName}</p>
          <p className="text-sm"><strong>Amount:</strong> ${paymentDetails?.amount}</p>
          {sessionId && (
            <p className="text-sm text-muted-foreground">
              Session ID: {sessionId}
            </p>
          )}
        </div>
        <Button onClick={() => navigate("/")} className="w-full">
          Return to Home
        </Button>
      </Card>
    </div>
  );
};

export default PaymentSuccess;