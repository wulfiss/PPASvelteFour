import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

/* export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:cloroLibre');
	const { data: cloroLibre, error: supabaseError } = await supabase.from('cloroLibre')
        .select('*')
        .order('fecha', { ascending: false })
        .order('hora', { ascending: false });

        if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return { cloroLibre };
}; */

export const load: PageServerLoad = async ({ depends, locals: { supabase }, url }) => {
	depends('supabase:db:cloroLibre');

	const searchTerm = url.searchParams.get('search') || '';
	const page = parseInt(url.searchParams.get('page') || '1');
	const pageSize = 10;

	let query = supabase.rpc('convert_to_text');

	if (searchTerm) {
		query = query.or(`fecha.ilike.%${searchTerm}%,sector.ilike.%${searchTerm}%,grifo.ilike.%${searchTerm}%`);
	}

	const { data: countData, error: countError } = await supabase.rpc('get_distinct_cloro_count', {
		search_term: searchTerm
	});

	if (countError) {
		throw error(500, 'Error fetching count from Supabase' + countError.message);
	}

	const totalItems = countData[0].count;

	query = query
		.order('fecha', { ascending: false })
		.order('hora', { ascending: false });
		.range((page - 1) * pageSize, page * pageSize - 1);

	const { data: cloroLibre, error: supabaseError } = await query;

	if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return { 
		cloroLibre,
		totalItems,
		page,
		pageSize,
		searchTerm
	 };
}
