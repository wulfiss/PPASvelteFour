import { createBrowserClient } from "@supabase/ssr";
import { type Handle, redirect } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from '$env/static/private';

const supabase: Handle = async ({ event, resolve }) => {
    event.locals.supabase = createBrowserClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
        cookies: {
            getAll: () => event.cookies.getAll(),
            setAll: (cookiesToSet) => {
                cookiesToSet.forEach(({ name, value, options }) => {
                    event.cookies.set(name, value, { ...options, path: '/'})
                })
            },
        },
    })

    event.locals.safeGetSession = async () => {
        const {
            data: {session},
        } = await event.locals.supabase.auth.getSession()
        if (!session){
            return { session: null, user: null }
        }
        
        const { 
            data: { user }, error, 
        } = await event.locals.supabase.auth.getUser()
        if (error) {
            return { session: null, user: null }
        }

        return { session, user }
    } 
    
    return resolve(event, {
        filterSerializedResponseHeaders(name){
            return name === 'content-range' || name === 'x-supabase-api-version'
        },
    })
}

const authGuard: Handle = async ({ event, resolve }) => {
    const { session, user } = await event.locals.safeGetSession()
    event.locals.session = session
    event.locals.user = user

    if (!event.locals.session && event.url.pathname.startsWith('/private')) {
        return redirect(303,'/auth')
    }

    if (event.locals.session && event.url.pathname === '/auth') {
        return redirect(303, '/private')
    }

    return resolve(event)
}

export const handle: Handle = sequence(supabase, authGuard)