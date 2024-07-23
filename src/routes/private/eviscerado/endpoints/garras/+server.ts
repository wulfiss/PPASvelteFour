import { json, error } from "@sveltejs/kit";
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals: { supabase, safeGetSession }, request }) => {
       
    const session = await safeGetSession();
    
    if (!session) {
        throw error(401, 'Unauthorized');
    }

    try{
        const data = await request.json();

        const { error: dbError } = await supabase
        .from("garras")
        .insert(data);

        if (dbError) {
            throw error(500, { message: `Supabase error: ${dbError.message}` });
        }
        return json({ message: "Data inserted successfully"});
    } catch (err) {
        console.error('Error processing request:', err);
        throw error(500, 'Internal server error');
    }
   
}