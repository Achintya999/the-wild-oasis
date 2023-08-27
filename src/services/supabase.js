import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qguqlillaqxpovodfhfk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndXFsaWxsYXF4cG92b2RmaGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MzkxODIsImV4cCI6MjAwODExNTE4Mn0.rZALQneGLSqNno8-IcnhrVhYXKY8c7yWl_Dj9d-K3ss";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
