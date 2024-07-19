<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';

	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ supabase, user } = data);
</script>

<h1>Private page for user: {user?.email}</h1>

<a href="/private/chlorine">Cloro</a>