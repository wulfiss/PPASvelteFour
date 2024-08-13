<script lang="ts">
	import Downloadbtn from './downloadButton/downloadBtn.svelte';
	import PaginationBtn from '$lib/components/paginationButton/paginationBtn.svelte';
	import { goto, invalidate } from '$app/navigation';
	import DeleteConfirmationModal from './modal/deleteModal/DeleteModal.svelte';
	import AddFormModal from './modal/addFormModal/AddFormModal.svelte';
    import { page as currentPage } from '$app/stores';
	import type { PageData } from './$types';

	type ModalState = {
		isFormOpen: boolean;
		itemToDelete: any | null;
	};

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

	$: concentracionClass = (concentracion: number) => {
		if (concentracion >= 0.3 && concentracion <= 0.8) {
			return 'badge badge-lg badge-success gap-2';
		} else if (concentracion > 0.8 && concentracion <= 1) {
			return 'badge badge-lg badge-warning gap-2';
		} else if (concentracion < 0.3 && concentracion >= 0.2) {
			return 'badge badge-lg badge-warning gap-2';
		} else {
			return 'badge badge-lg badge-error gap-2';
		}
	};

	export let data: PageData;
	
	$: ({ cloroLibre, totalItems, pageSize, searchTerm, page } = data);
	
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

	const debounce = (callback: Function, wait = 350) => {
    	let timeout: ReturnType<typeof setTimeout>;
    	return (...args: any[]) => {
        	clearTimeout(timeout);
        	timeout = setTimeout(() => callback(...args), wait);
    	};
	};
</script>

<div id="header" class="flex flex-row justify-center gap-2">
	<label class="input input-bordered flex items-center gap-2">
		<input
			type="text"
			class="grow"
			placeholder="Filtrar por fecha, sector o grifo"
			bind:value={searchInput}
			on:keyup={debounce(handleSearch)}
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
		<!-- head -->
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
			<!-- body -->
			{#each cloroLibre as item, i}
				<tr>
					<th class="text-center font-normal">{item.fecha}</th>
					<td class="text-center">{item.hora}</td>
					<td class="text-center">{item.sector}</td>
					<td class="text-center">{item.grifo}</td>
					<td class="text-center">
						<div class={concentracionClass(item.concentracion)}>
							{item.concentracion.toFixed(2)}
						</div>
					</td>
					<td class="text-center flex">
						<!-- <button class="btn btn-sm btn-primary mr-2">Editar</button> -->
						<button on:click={() => openDeleteModal(item)} class="btn btn-ghost btn-xs">
							Eliminar
						</button>
						<!-- <DeleteButton id={item.id} on:deleted={handleItemDeleted} /> -->
					</td></tr
				>
			{/each}
		</tbody>
	</table>
</div>
<div class="join flex flex-row justify-center mt-3">
	<button class="join-item btn" disabled={page === 1} on:click={() => changePage(page - 1)}>«</button>
	{#each Array(totalPages) as _, i}
	  {#if i + 1 === 1 || i + 1 === totalPages || (i + 1 >= page - 1 && i + 1 <= page + 1)}
		<button class="join-item btn" class:btn-active={page === i + 1} on:click={() => changePage(i + 1)}>{i + 1}</button>
	  {:else if (i === 1 || i === totalPages - 2) && (page > 3 && page < totalPages - 2)}
		<button class="join-item btn btn-disabled">...</button>
	  {/if}
	{/each}
	<button class="join-item btn" disabled={page === totalPages} on:click={() => changePage(page + 1)}>»</button>
  </div>

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
