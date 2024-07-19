<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let item: any = null;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}

	async function handleDelete() {
		if (!item) return;

		try {
			const response = await fetch(`/private/chlorine/endpoints/delete/${item.id}`, {
				method: 'DELETE'
			});

			if (!response.ok) {
				throw new Error('Error al eliminar el registro');
			}

			dispatch('deleteSuccess');
		} catch (error) {
			console.error('Error:', error);
			alert('Error al eliminar el registro');
		}
	}
</script>

{#if item}
	<dialog id="modal" class="modal" open>
		<div class="card bg-base-100 w-96 shadow-xl">
			<div class="card-body items-center text-center">
				<h2 class="card-title">¿Estás seguro de eliminar el registro?</h2>
				<p></p>
				<div class="card-actions justify-end">
					<button class="btn btn-sm btn-error" on:click={handleDelete}> Eliminar </button>
					<button on:click={closeModal} class="btn btn-sm btn-outline"> Cancelar </button>
				</div>
			</div>
		</div>
	</dialog>
{/if}
