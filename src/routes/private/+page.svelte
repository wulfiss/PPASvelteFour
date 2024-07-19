<script lang="ts">
	import type { PageData } from './$types';
	import AddFormModal from './chlorine/modal/addFormModal/AddFormModal.svelte';

	export let data: PageData;

	type ModalState = {
		isFormOpen: boolean;
	};

	const modalState: ModalState = {
		isFormOpen: false
	};

	const openFormModal = () => (modalState.isFormOpen = true);
	const closeFormModal = () => (modalState.isFormOpen = false);

	const onFormModal = async () => {
		/* await invalidate('cloroLibre'); */
		closeFormModal();
	};

	$: ({ supabase, user } = data);
</script>

<div class="dropdown dropdown-top dropdown-end absolute bottom-0 right-0">
	<div tabindex="0" role="button" class="btn m-1">Click</div>
	<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
		<li>
			<button class="btn" on:click={openFormModal}> Agregar Cloro </button>
		</li>
		<li><a>Item 2</a></li>
	</ul>
</div>

<AddFormModal
	bind:flag={modalState.isFormOpen}
	on:close={closeFormModal}
	on:submitSuccess={onFormModal}
/>
