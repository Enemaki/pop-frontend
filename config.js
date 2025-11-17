
import { createClient } from "@supabase/supabase-js";

/** OpenAI config */


/** Supabase config */
const privateKey = process.env.SUPABASE_KEY;
if (!privateKey) console.log(`Expected env var SUPABASE_API_KEY`);
const url = process.env.SUPABASE_URL;
if (!url) console.log(`Expected env var SUPABASE_URL`);
export const supabase = createClient(url, privateKey);