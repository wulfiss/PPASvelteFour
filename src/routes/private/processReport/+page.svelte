<script lang="ts">
	import { goto } from '$app/navigation';
    import { page as currentPage } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;

	const navigateToDetails = (fecha: any, productor: any) => {
		goto(`/private/processReport/${fecha}/${productor}`);
	};



	$: ({ Sector_One, totalItems, pageSize, searchTerm, page } = data);
	$: totalPages = Math.ceil(totalItems / pageSize);

	let searchInput = searchTerm;

	function handleSearch() {
		if (searchInput.trim() === '') {
			goto(`?page=1`);
		} else {
			goto(`?search=${encodeURIComponent(searchInput)}&page=1`);
		}
	}

	function changePage(newPage: number) {
		goto(`?search=${encodeURIComponent(searchTerm)}&page=${newPage}`);
	}

	function clearSearch() {
		searchInput = '';
		goto(`?page=1`);
	}


</script>

<div id="header" class="flex flex-row justify-center gap-2">
	<label class="input input-bordered flex items-center gap-2">
		<input
			type="text"
			class="grow"
			placeholder="Filtrar por fecha o productor"
			bind:value={searchInput}
			on:keyup={(e) => e.key === 'Enter' && handleSearch()}
		/>
	</label>
	<button class="btn" on:click={handleSearch}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
	</button>
	{#if searchTerm}
		<button class="btn btn-sm mb-4" on:click={clearSearch}>Limpiar búsqueda</button>
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
						<button class="btn btn-ghost btn-xs" on:click={() => navigateToDetails(date.fecha, date.productor)}>details</button>
					</th>
				</tr>
	  		{/each}
	  	</tbody>
	  </table>
</div>

<div class="btn-group flex flex-row justify-center gap-2 mt-3">
	<button class="btn" disabled={page === 1} on:click={() => changePage(page - 1)}>«</button>
	{#each Array(totalPages) as _, i}
		<button class="btn" class:btn-active={page === i + 1} on:click={() => changePage(i + 1)}>{i + 1}</button>
	{/each}
	<button class="btn" disabled={page === totalPages} on:click={() => changePage(page + 1)}>»</button>
</div>