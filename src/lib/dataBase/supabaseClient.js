import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from '$env/static/private';
import { createBrowserClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createBrowserClient(supabaseUrl || '', supabaseKey || '');
