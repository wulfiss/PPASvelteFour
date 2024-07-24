import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
    depends('supabase:db:combinedPoultryData');

    try {
        const { data, error: queryError } = await supabase
            .from('combined_poultry_data')
            .select('*')
            .order('fecha', { ascending: false });

        if (queryError) {
            throw error(500, `Error fetching data: ${queryError.message}`);
        }

        // Group the data by date
        const groupedData = data.reduce((acc, curr) => {
            if (!acc[curr.fecha]) {
                acc[curr.fecha] = [];
            }
            acc[curr.fecha].push(curr);
            return acc;
        }, {});

        // Convert to array and sort
        const result = Object.entries(groupedData)
            .map(([fecha, entries]) => ({ fecha, entries }))
            .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

        return { combinedPoultryData: result };
    } catch (err) {
        console.error('Error in load function:', err);
        throw error(500, 'An error occurred while fetching data');
    }
};