<script lang="ts">
 	import { invalidate } from '$app/navigation';

	import Downloadbtn from './downloadButton/downloadBtn.svelte';
	import DeleteConfirmationModal from './modal/deleteModal/DeleteModal.svelte';
	import AddFormModal from './modal/addFormModal/AddFormModal.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';

	import type { PageData } from './$types';
	import type { ModalState } from '$lib/types';

	import debounce from '$lib/utils/debounce';
	import chlorineConcentrationBadge from '$lib/utils/chlorineConcentrationBadge';
	import handleSearch from '$lib/utils/searchBarHandler';
 

	export let data: PageData;

	$: ({ cloroLibre, totalItems, pageSize, searchTerm, page } = data);
	
	let searchInput = searchTerm;

	const search = debounce(() => {
		handleSearch(searchInput);
	}, 400);

	const modalState: ModalState = {
		isFormOpen: false,
		itemToDelete: null
	};

	const openFormModal = () => (modalState.isFormOpen = true);
	const closeFormModal = () => (modalState.isFormOpen = false);
	const openDeleteModal = (item: any) => (modalState.itemToDelete = item);
	const closeDeleteModal = () => (modalState.itemToDelete = null);

	const onDeleteModal = async () => {
		await invalidate('supabase:db:cloroLibre');
		closeDeleteModal();
	};

	const onFormModal = async () => {
		await invalidate('supabase:db:cloroLibre');
		closeFormModal();
	};

</script>

<div id="header" class="flex flex-row justify-center gap-2">
	<label class="input input-bordered flex items-center gap-2">
		<input
			type="text"
			class="grow"
			placeholder="Filtrar por fecha, sector o grifo"
			bind:value={searchInput}
			on:keyup={search}
		/>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		class="h-4 w-4 opacity-70">
		<path
		  fill-rule="evenodd"
		  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
		  clip-rule="evenodd" />
	  </svg>
	</label>
	<button class="btn" on:click={openFormModal}
		><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
			><path
				d="M11.75 3a.75.75 0 0 1 .743.648l.007.102.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75Z"
				fill="#212121"
			/></svg
		></button
	>
	<Downloadbtn />
</div>
<div class="overflow-x-auto">
	<table class="table table-zebra">
		<thead>
			<tr>
				<th class="text-center">Fecha</th>
				<th class="text-center">Hora</th>
				<th class="text-center">Sector</th>
				<th class="text-center">Grifo</th>
				<th class="text-center">Concentración<br />(ppm)</th>
			</tr>
		</thead>
		<tbody>
			{#each cloroLibre as item, i}
				<tr>
					<th class="text-center font-normal">{item.fecha}</th>
					<td class="text-center">{item.hora}</td>
					<td class="text-center">{item.sector}</td>
					<td class="text-center">{item.grifo}</td>
					<td class="text-center">
						<div class={chlorineConcentrationBadge(item.concentracion)}>
							{item.concentracion.toFixed(2)}
						</div>
					</td>
					<td class="text-center flex">
						<button on:click={() => openDeleteModal(item)} class="btn btn-ghost btn-xs">
							Eliminar
						</button>
					</td></tr
				>
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

<DeleteConfirmationModal
	bind:item={modalState.itemToDelete}
	on:close={closeDeleteModal}
	on:deleteSuccess={onDeleteModal}
/>

<AddFormModal
	bind:flag={modalState.isFormOpen}
	on:close={closeFormModal}
	on:submitSuccess={onFormModal}
/>
