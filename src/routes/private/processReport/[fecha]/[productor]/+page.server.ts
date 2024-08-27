import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, params, locals: { supabase } }) => {
	depends('supabase:db:Sector_One');
	const { data: zonaIntermediaData, error: supabaseErrorOne } = await supabase.from('Sector_One')
        .select('*')
        .eq('fecha', params.fecha)
        .eq('productor', params.productor)
        .order('fecha', { ascending: false })

        if (supabaseErrorOne) {
		throw error(500, 'Error fetching data from Supabase' + supabaseErrorOne.message);
	}

    depends('supabase:db:cloroLibre');
	const { data: cloroLibreData, error: supabaseErrorTwo } = await supabase.from('cloroLibre')
        .select('*')
        .eq('fecha', params.fecha)
        .order('fecha', { ascending: false })
        .order('hora', { ascending: false });

        if (supabaseErrorTwo) {
		throw error(500, 'Error fetching data from Supabase' + supabaseErrorTwo.message);
	}

    depends('supabase:db:General_Observations');
	const { data: generalObservationsData, error: supabaseErrorThree } = await supabase.from('General_Observations')
        .select('*')
        .eq('fecha', params.fecha)
        .order('fecha', { ascending: false })

        if (supabaseErrorThree) {
		throw error(500, 'Error fetching data from Supabase' + supabaseErrorThree.message);
	}

	return { zonaIntermediaData, cloroLibreData, generalObservationsData };
};