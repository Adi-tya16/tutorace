import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseService = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    const { sessionId } = await req.json();
    
    if (!sessionId) {
      throw new Error("Session ID is required");
    }

    console.log("Verifying payment for session:", sessionId);

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("Stripe session status:", session.payment_status);

    // Update booking status based on payment status
    const { data: booking, error: fetchError } = await supabaseService
      .from("bookings")
      .select("*")
      .eq("stripe_session_id", sessionId)
      .single();

    if (fetchError) {
      console.error("Error fetching booking:", fetchError);
      throw new Error("Booking not found");
    }

    const newStatus = session.payment_status === "paid" ? "completed" : "failed";
    
    const { error: updateError } = await supabaseService
      .from("bookings")
      .update({ 
        status: newStatus,
        updated_at: new Date().toISOString()
      })
      .eq("stripe_session_id", sessionId);

    if (updateError) {
      console.error("Error updating booking:", updateError);
      throw new Error("Failed to update booking status");
    }

    console.log(`Booking ${booking.id} status updated to: ${newStatus}`);

    return new Response(JSON.stringify({
      success: true,
      paymentStatus: session.payment_status,
      bookingStatus: newStatus,
      tutorName: booking.tutor_name,
      amount: booking.amount / 100 // Convert cents to dollars
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Payment verification error:", error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});