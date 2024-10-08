import { error, type RequestHandler } from "@sveltejs/kit";
import * as XLSX from 'xlsx';

export const GET: RequestHandler = async ({ locals: { supabase }}) => {
    const { data, error: dbError } = await supabase
        .from("cloroLibre")
        .select("*")
        .order("fecha", { ascending: false });

    if (dbError) {
        throw error(500, { message: dbError.message });
    }

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "cloroLibre");

    const buf = XLSX.write(wb, { type: 'array', bookType: 'xlsx'});
    const blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

    return new Response(blob,{
        headers: {
            'Content-Disposition': 'attachment; filename="CloroLibre.xlsx"'
        }
    });
}