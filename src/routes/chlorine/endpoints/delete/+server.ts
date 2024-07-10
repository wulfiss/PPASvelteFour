import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/dataBase/supabaseClient";

export const DELETE: RequestHandler = async ({request}) => {
    const { id } = await request.json();

    if(!id) {
        return json({error: "No id provided"}, {status: 400});
    }

    const { error: supabaseError } = await supabase
        .from("cloroLibre")
        .delete()
        .eq("id", id);

    if(supabaseError) {
        console.error("Error deleting data from Supabase:", supabaseError.message);
        return json({error: "Error deleting data from Supabase"}, {status: 500});
    }

    return json({message:'Item eliminado correctamente'}, {status: 200, headers: {'Content-Type': 'application/json'}})
}