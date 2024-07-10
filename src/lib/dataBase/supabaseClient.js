import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from '$env/static/private';
import { createBrowserClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = VITE_SUPABASE_URL;
const supabaseKey = VITE_SUPABASE_ANON_KEY;

export const supabase = createBrowserClient(supabaseUrl || '', supabaseKey || '');
