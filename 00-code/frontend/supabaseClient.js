import { createClient } from "@supabase/supabase-js";

// آدرس و کلید پروژه‌ات در Supabase
// (برای امنیت، در نسخه تحویلی مقدار واقعی قرار داده نمی‌شود)
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(supabaseUrl, supabaseKey);
