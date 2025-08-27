import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get('session_id');
  
  // Hardcoded redirect to prevent manipulation
  const redirectUrl = sessionId 
    ? `https://vdutbqrngozppbtjwiwq.supabase.co/payment-success?session_id=${sessionId}`
    : 'https://vdutbqrngozppbtjwiwq.supabase.co/payment-success';
  
  return new Response(null, {
    status: 302,
    headers: {
      'Location': redirectUrl,
    },
  });
});