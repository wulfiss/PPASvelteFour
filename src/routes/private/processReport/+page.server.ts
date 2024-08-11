import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

/* export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:Sector_One');
	const { data: Sector_One, error: supabaseError } = await supabase.from('Sector_One')
        .select('id, fecha, productor')
        .order('fecha', { ascending: false })

        if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return { Sector_One };
}; */

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:Sector_One');
	const { data: Sector_One, error: supabaseError } = await supabase
		.rpc('get_distinct_values')
		.order('fecha', { ascending: false })

        if (supabaseError) {
		throw error(500, 'Error fetching data from Supabase' + supabaseError.message);
	}

	return { Sector_One };
};


/* create or replace function get_distinct_values()
returns table(fecha text, productor text)
language sql
as $$
  select distinct fecha, productor from "Sector_One"
$$;
 */