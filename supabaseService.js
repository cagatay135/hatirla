import { supabase } from "./lib/supabaseClient";

export async function getCases() {
  const { data } = await supabase.from("remember").select();
  return data;
}
