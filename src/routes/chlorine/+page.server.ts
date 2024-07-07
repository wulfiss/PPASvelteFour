import { error } from '@sveltejs/kit'; // Import SvelteKit's error function
import { supabase } from '$lib/dataBase/supabaseClient.js';

export const load = async ({ depends }) => {

  try {
    depends('freechlorine');
    const { data: cloroLibre, error: supabaseError } = await supabase
      .from('cloroLibre')
      .select('*')
      .order("date", { ascending: false });

    if (supabaseError) {
      throw error(500, {
        message: 'Error fetching data from Supabase: ' + supabaseError.message
      });
    }

    return {
      props: { cloroLibre }
    };

  } catch (err) {
    throw error(500, {
      message: 'An error occurred while fetching data: ' + err.message
    });
  }
};