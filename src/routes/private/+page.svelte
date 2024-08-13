<script lang="ts">
	import AddFormModal from './chlorine/modal/addFormModal/AddFormModal.svelte';
	import { goto } from '$app/navigation';

	type ModalState = {
		isFormOpen: boolean;
	};

	const modalState: ModalState = {
		isFormOpen: false
	};

	const openFormModal = () => (modalState.isFormOpen = true);
	const closeFormModal = () => (modalState.isFormOpen = false);

	const onFormModal = async () => {
		closeFormModal();
	};

	const openForm = () => goto('/private/eviscerado/');
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
