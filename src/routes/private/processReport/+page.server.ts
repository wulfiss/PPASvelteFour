import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase }, url }) => {
	depends('supabase:db:Sector_One');

	const searchTerm = url.searchParams.get('search') || '';
	const page = parseInt(url.searchParams.get('page') || '1');
	const pageSize = 10;

	let query = supabase.rpc('get_distinct_values');

	if (searchTerm) {
		query = query.or(`fecha.ilike.%${searchTerm}%,productor.ilike.%${searchTerm}%`);
	}

	const { data: countData, error: countError } = await supabase.rpc('get_distinct_values_count', {
        search_term: searchTerm
    });

	if (countError) {
		throw error(500, 'Error fetching count from Supabase' + countError.message);
	}

	const totalItems = countData[0].count;

	query = query
		.order('fecha', { ascending: false })
		.range((page - 1) * pageSize, page * pageSize - 1);

	const { data: Sector_One, error: supabaseError } = await query;

	if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return { 
		Sector_One,
		totalItems,
		page,
		pageSize,
		searchTerm
	 };
};


/* create or replace function get_distinct_values()
returns table(fecha text, productor text)
language sql
as $$
  select distinct fecha, productor from "Sector_One"
$$;
 */