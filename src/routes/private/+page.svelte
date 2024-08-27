<script lang="ts">
	import AddFormModal from './chlorine/modal/addFormModal/AddFormModal.svelte';
	import FormModalObservations from './generalObservations/form/FormModalObservations.svelte';
	import { goto } from '$app/navigation';

	type ModalState = {
		isChlorineOpen: boolean;
		isObservationsOpen: boolean;
	};

	const modalState: ModalState = {
		isChlorineOpen: false,
		isObservationsOpen: false,
	};

	const openChlorineModal = () => (modalState.isChlorineOpen = true);
	const closeChlorineModal = () => (modalState.isChlorineOpen = false);
	const openObservationsModal = () => (modalState.isObservationsOpen = true);
	const closeObservationsModal = () => (modalState.isObservationsOpen = false);

	const onChlorineModal = async () => {
		closeChlorineModal();
	};

	const onObservationsModal = async () => {
		closeObservationsModal();
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
			<button class="btn" on:click={openChlorineModal}> Agregar Cloro </button>
		</li>
		<li>
			<button class="btn" on:click={openForm}> Intermedia / Eviscerado </button>
		</li>
		<li>
			<button class="btn" on:click={openObservationsModal}> Agregar Observaciones </button>
		</li>
	</ul>
</div>

<AddFormModal
	bind:flag={modalState.isChlorineOpen}
	on:close={closeChlorineModal}
	on:submitSuccess={onChlorineModal}
/>

<FormModalObservations
	bind:flag={modalState.isObservationsOpen}
	on:close={closeObservationsModal}
	on:submitSuccess={onObservationsModal}
/>