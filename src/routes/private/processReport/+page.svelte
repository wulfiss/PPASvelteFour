<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	import Pagination from '$lib/components/pagination/Pagination.svelte';
	import handleSearch from '$lib/utils/searchBarHandler';

	import debounce from '$lib/utils/debounce';

	export let data: PageData;

	$: ({ Sector_One, totalItems, pageSize, searchTerm, page } = data);

	let searchInput = searchTerm;

	const search = debounce(() => {
		handleSearch(searchInput);
	}, 400);

	function clearSearch() {
		searchInput = '';
		goto(`?page=1`);
	}

	const navigateToDetails = (fecha: never, productor: never) => {
		goto(`/private/processReport/${fecha}/${productor}`);
	};

</script>

<div id="header" class="flex flex-row justify-center gap-2">
	<label class="input input-bordered flex items-center gap-2">
		<input
			type="text"
			class="grow"
			placeholder="Filtrar por fecha o productor"
			bind:value={searchInput}
			on:keyup={search}
		/>
	</label>
	<button class="btn" on:click={search}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
	</button>
	{#if searchTerm}
		<button class="btn btn-square" on:click={clearSearch}>
			<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12" />
			</svg>
	  	</button>
	{/if}
</div>

<div class="overflow-x-auto w-full flex justify-center mt-3">
	<table class="table table-zebra md:w-4/5 gap-2">
		<thead>
		  <tr>
			<th>Fecha</th>
			<th>Productor</th>
			<th></th>
		  </tr>
		</thead>
		<tbody>
	  		{#each Sector_One as date, i}
	  			<tr>
		  			<td>{date.fecha}</td>
		  			<td>{date.productor}</td>
					<th>
						<button class="btn btn-ghost btn-xs" on:click={() => navigateToDetails(date.fecha, date.productor)}>Detalles</button>
					</th>
				</tr>
	  		{/each}
	  	</tbody>
	  </table>
</div>

<Pagination
	searchTerm={searchInput}
	page={page}
	pageSize={pageSize}
	totalItems={totalItems}
/>