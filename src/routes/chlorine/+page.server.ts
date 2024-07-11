import { error, fail, redirect } from '@sveltejs/kit'; // Import SvelteKit's error function
import { supabase } from '$lib/dataBase/supabaseClient.js';
import type { Actions, PageServerLoad } from './$types';

/* export const actions: Actions = {
  deleteItem: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    if (!id) {
      return fail(400, {message: 'Missing ID'});
    }

    const { error: supabaseError } = await supabase
      .from('cloroLibre')
      .delete()
      .eq('id', id);

    if (supabaseError) {
      console.error('Error deleting data from Supabase:', supabaseError.message);
      return fail(500, {message: 'Error deleting data from Supabase'});
    }

    throw redirect(303, '/chlorine');
  }
} */

export const load: PageServerLoad = async ({ depends }) => {
	depends('cloroLibre');

	const { data: cloroLibre, error: supabaseError } = await supabase
		.from('cloroLibre')
		.select('*')
		.order('fecha', { ascending: false })
		.order('hora', { ascending: false });

	if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return {
		cloroLibre
	};
};
