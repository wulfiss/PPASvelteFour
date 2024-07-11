<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const itemId = $page.params.id;

	async function confirmDelete() {
		try {
			const response = await fetch(`/chlorine/endpoints/delete/${itemId}`, {
				method: 'DELETE'
			});

			if (!response.ok) {
				throw new Error('Error al eliminar el registro');
			}

			goto('/chlorine');
		} catch (error) {
			console.error('Error:', error);
			alert('Error al eliminar el registro');
		}
	}

	function cancelDelete() {
		goto('/chlorine');
	}
</script>

<dialog id="modal" class="modal" open>
	<div class="card bg-neutral text-neutral-content w-96">
		<div class="card-body items-center text-center">
			<h2 class="card-title">¿Estás seguro de eliminar el registro?</h2>
			<p></p>
			<div class="card-actions justify-end">
				<button class="btn btn-sm btn-error" on:click={confirmDelete}> Eliminar </button>
				<button on:click={cancelDelete} class="btn btn-sm btn-outline"> Cancelar </button>
			</div>
		</div>
	</div>
</dialog>
