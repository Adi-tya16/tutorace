-- Fix security vulnerabilities in RLS policies

-- First, drop the insecure policies on bookings table
DROP POLICY IF EXISTS "Service role can insert bookings" ON public.bookings;
DROP POLICY IF EXISTS "Service role can update bookings" ON public.bookings;

-- Create secure policies for bookings
CREATE POLICY "Users can create their own bookings" 
ON public.bookings 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings" 
ON public.bookings 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bookings" 
ON public.bookings 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Create service role policies (for edge functions only)
CREATE POLICY "Service role full access to bookings" 
ON public.bookings 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix profiles role security - remove ability for users to change their own role
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create secure profile update policy (excluding role changes)
CREATE POLICY "Users can update their own profile (except role)" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (
  auth.uid() = user_id AND 
  OLD.role = NEW.role  -- Prevent role changes
);

-- Create service role policy for profiles (for edge functions to manage roles)
CREATE POLICY "Service role can manage all profiles" 
ON public.profiles 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);