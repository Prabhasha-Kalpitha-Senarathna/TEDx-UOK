import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database"; // adjust alias/relative import

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase env vars are missing");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
