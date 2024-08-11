import { error, type RequestHandler } from '@sveltejs/kit';
import * as XLSX from 'xlsx';

export const GET: RequestHandler = async ({ locals: { supabase }, url }) => {
    const fecha = url.searchParams.get('fecha');
    const productor = url.searchParams.get('productor');

    if (!fecha || !productor) {
        throw error(400, { message: 'Missing query parameters' });
    }

    const { data: CloroLibre, error: dbErrorOne } = await supabase
        .from('cloroLibre')
        .select('*')
        .eq('fecha', fecha)
        .order('fecha', { ascending: false })
        .order('hora', { ascending: false });

    if (dbErrorOne) {
        throw error(500, { message: dbErrorOne.message });
    }

    const { data: zonaIntermediaData, error: dbErrorTwo } = await supabase
        .from('Sector_One')
        .select('*')
        .eq('fecha', fecha)
        .eq('productor', productor)
        .order('fecha', { ascending: false });
        

    if (dbErrorTwo) {
        throw error(500, { message: dbErrorTwo.message });
    }

    const wsOne = XLSX.utils.json_to_sheet(CloroLibre);
    const wsTwo = XLSX.utils.json_to_sheet(zonaIntermediaData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsOne, "Cloro Libre");
    XLSX.utils.book_append_sheet(wb, wsTwo, "Zona Intermedia");

    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    return new Response(buf, {
        headers: {
            'Content-Disposition': 'attachment; filename="InfoDelDia.xlsx"',
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
    });
}
