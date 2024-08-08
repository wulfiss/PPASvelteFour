import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, params, locals: { supabase } }) => {
	depends('supabase:db:Sector_One');
	const { data: productor, error: supabaseError } = await supabase.from('Sector_One')
        .select('*')
        .eq('fecha', params.fecha)
        .eq('productor', params.productor)
        .order('fecha', { ascending: false })

        if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return { productor };
};