import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getSupabaseResources() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

  // Create Supabase client
  const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

  // Derive projectId from URL
  const projectId = supabaseUrl.replace("https://", "").replace(".supabase.co", "");
  const publicAnonKey = supabaseAnonKey;

  return { supabase, projectId, publicAnonKey };
}