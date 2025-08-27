-- Fix function security by setting immutable search_path
CREATE OR REPLACE FUNCTION public.prevent_role_changes()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow service role to change roles
  IF current_setting('role') != 'service_role' AND OLD.role IS DISTINCT FROM NEW.role THEN
    RAISE EXCEPTION 'Regular users cannot change their role';
  END IF;
  RETURN NEW;
END;
$$;