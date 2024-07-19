import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:cloroLibre');
	const { data: cloroLibre, error: supabaseError } = await supabase.from('cloroLibre')
        .select('*')
        .order('fecha', { ascending: false })
        .order('hora', { ascending: false });

        if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return { cloroLibre };
};