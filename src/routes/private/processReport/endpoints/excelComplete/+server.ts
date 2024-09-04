import { error, type RequestHandler } from '@sveltejs/kit';
import * as XLSX from 'xlsx';

export const GET: RequestHandler = async ({ locals: { supabase } }) => {

    const { data: zonaIntermediaData, error: dbErrorTwo } = await supabase
        .from('Sector_One')
        .select('*')
        .order('fecha', { ascending: false });

    if (dbErrorTwo) {
        throw error(500, { message: dbErrorTwo.message });
    }
    const wsTwo = XLSX.utils.json_to_sheet(zonaIntermediaData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsTwo, "Zona Intermedia");

    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    return new Response(buf, {
        headers: {
            'Content-Disposition': 'attachment; filename="InfoDelDia.xlsx"',
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
    });
}