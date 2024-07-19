import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:cloroLibre');
	const { data: cloroLibre } = await supabase.from('cloroLibre')
        .select('*')
        .order('fecha', { ascending: false })
        .order('hora', { ascending: false });

	return { cloroLibre };
};
