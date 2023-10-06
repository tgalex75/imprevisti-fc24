/* import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://pwhtywxsjvoooodpnstb.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3aHR5d3hzanZvb29vZHBuc3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMjMyMjIsImV4cCI6MjAxMDc5OTIyMn0.5J28wVTp3fPodzZ5kt-KRAKZWYqHRjvkQce5kff8qjc";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
 */

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);