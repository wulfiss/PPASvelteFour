<script lang="ts">
	import type { PageData } from './$types';
	import AddFormModal from './chlorine/modal/addFormModal/AddFormModal.svelte';
	import AddInterEvisceModal from './eviscerado/modal/addInterEvisceModal.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	type ModalState = {
		isFormOpen: boolean;
		isEvisceInterOpen: boolean;
	};

	const modalState: ModalState = {
		isFormOpen: false,
		isEvisceInterOpen: false
	};

	const openFormModal = () => (modalState.isFormOpen = true);
	const closeFormModal = () => (modalState.isFormOpen = false);
	const openInterEvisceModal = () => (modalState.isEvisceInterOpen = true);
	const closeInterEvisceModal = () => (modalState.isEvisceInterOpen = false);

	const onFormModal = async () => {
		/* await invalidate('cloroLibre'); */
		closeFormModal();
	};

	const onInterEvisceModal = async () => {
		/* await invalidate('cloroLibre'); */
		closeInterEvisceModal();
	};

	const openForm = () => goto('/private/eviscerado/');

	$: ({ supabase, user } = data);
</script>

<div class="dropdown dropdown-top dropdown-end absolute bottom-0 right-0">
	<div tabindex="0" role="button" class="btn m-1 btn-success text-2xl font-bold">+</div>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul
		tabindex="0"
		class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2"
	>
		<li>
			<button class="btn" on:click={openFormModal}> Agregar Cloro </button>
		</li>
		<li><button class="btn" on:click={openForm}> Intermedia / Eviscerado </button></li>
	</ul>
</div>

<AddFormModal
	bind:flag={modalState.isFormOpen}
	on:close={closeFormModal}
	on:submitSuccess={onFormModal}
/>

<!-- <AddInterEvisceModal
	bind:flag={modalState.isEvisceInterOpen}
	on:close={closeInterEvisceModal}
	on:submitSuccess={onInterEvisceModal}
/> -->
<div class="flex w-full flex-col lg:flex-row">
	<div class="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content</div>
	<div class="divider lg:divider-horizontal">OR</div>
	<div class="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content</div>
  </div>
  