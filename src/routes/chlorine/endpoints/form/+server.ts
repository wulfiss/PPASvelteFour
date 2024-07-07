import { supabase } from "$lib/dataBase/supabaseClient";
import { json, error, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({request, body}) => {
    const data = await request.json();
    const { error: dbError } = await supabase
        .from("cloroLibre")
        .insert(data);

    if (dbError) {
        throw error(500, { message: `Supabase erro: ${dbError.message}` });
    }

    return json({ message: "Data inserted successfully"})
}