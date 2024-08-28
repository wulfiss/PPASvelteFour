<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let flag: any = null;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}

	let date = new Date();
	let today = date.toISOString().slice(0, 10); // YYYY-MM-DD

	let data = {
		fecha: today,
		observaciones_generales: '',
	};

	function resetForm() {
		data = {
			fecha: today,
			observaciones_generales: '',
		};
	}

	async function onFormSubmit() {
		try {
			const response = await fetch('/private/generalObservations/endpoints', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			if (!response.ok) {
				throw new Error('Error al enviar los datos');
			}

			resetForm();
			dispatch('submitSuccess');
		} catch (error) {
			console.error('Error:', error);
			alert('Error al enviar los datos');
		}
	}
</script>

{#if flag}
	<dialog id="modal" class="modal" open>
		<div class="modal-box">
			<div class="modal-action flex justify-center mt-0">
				<form
					id="clhonineForm"
					class="size-full"
					method="POST"
					on:submit|preventDefault={onFormSubmit}
				>
                <div class="divider divider-primary w-full">Obs. Generales</div>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Fecha</span>
						</div>
						<input
							type="date"
							name="date"
							bind:value={data.fecha}
							placeholder="Type here"
							class="input input-bordered w-full"
						/>
						<div class="label"></div>
					</label>
                    
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text"></span>
                            <span class="label-text-alt"></span>
                        </div>
                        <textarea
                            class="textarea textarea-bordered h-24"
                            placeholder="Observaciones"
                            bind:value={data.observaciones_generales}
                        ></textarea>
                        <div class="label">
                            <span class="label-text-alt"></span>
                            <span class="label-text-alt"></span>
                        </div>
                    </label>

					<div class="flex space-x-1">
						<button
							type="button"
							class="btn btn-error"
							on:click={() => {
								closeModal();
							}}>Cerrar</button
						>
						<button type="submit" class="btn flex-1 btn-success">Guardar</button>
					</div>
				</form>
			</div>
		</div>
	</dialog>
{/if}