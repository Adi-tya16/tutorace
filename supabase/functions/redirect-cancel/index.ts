import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

serve(async (req) => {
  // Hardcoded redirect to prevent manipulation
  return new Response(null, {
    status: 302,
    headers: {
      'Location': 'https://vdutbqrngozppbtjwiwq.supabase.co/payment-cancel',
    },
  });
});