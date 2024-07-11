import { error, fail, redirect } from '@sveltejs/kit'; // Import SvelteKit's error function
import { supabase } from '$lib/dataBase/supabaseClient.js';
import type { Actions, PageServerLoad } from './$types';

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
