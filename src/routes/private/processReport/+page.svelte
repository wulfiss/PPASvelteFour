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

	function downloadXLSXCompleto() {
        const url = `/private/processReport/endpoints/excelComplete`;
		window.location.href = url;
	}

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
	<button class="btn" on:click={() => downloadXLSXCompleto()}>
		Completo
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
		  ><path
			d="M5.25 20.5h13.498a.75.75 0 0 1 .101 1.493l-.101.007H5.25a.75.75 0 0 1-.102-1.494l.102-.006h13.498H5.25Zm6.633-18.498L12 1.995a1 1 0 0 1 .993.883l.007.117v12.59l3.294-3.293a1 1 0 0 1 1.32-.083l.094.084a1 1 0 0 1 .083 1.32l-.083.094-4.997 4.996a1 1 0 0 1-1.32.084l-.094-.083-5.004-4.997a1 1 0 0 1 1.32-1.498l.094.083L11 15.58V2.995a1 1 0 0 1 .883-.993L12 1.995l-.117.007Z"
			fill="#212121"
		  /></svg
		>
	  </button>
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