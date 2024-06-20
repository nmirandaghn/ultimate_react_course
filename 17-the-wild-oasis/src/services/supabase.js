import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ssxuonrmhsuvhpuxrgaj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzeHVvbnJtaHN1dmhwdXhyZ2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjA5NjQsImV4cCI6MjAyNzM5Njk2NH0.fqb6eEE-gHAzCIU1RKKo3KFXt8uG2lLHN-YQftmkl0s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
