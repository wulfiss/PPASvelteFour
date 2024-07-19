<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let flag: any = null;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}

	let date = new Date();
	let today = date.toISOString().slice(0, 10); // YYYY-MM-DD
	let time = date.toLocaleTimeString('en-US', {
		hour12: false, // Ensure 24-hour format
		hour: '2-digit',
		minute: '2-digit'
	});

	let data = {
		fecha: today,
		hora: time,
		sector: 'Zona Intermedia',
		grifo: 122,
		concentracion: 0.0
	};

	function resetForm() {
		data = {
			fecha: today,
			hora: time,
			sector: 'Zona Intermedia',
			grifo: 122,
			concentracion: 0.0
		};
	}

	async function onFormSubmit() {
		try {
			const response = await fetch('/private/chlorine/endpoints/form', {
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

<!-- <button class="btn fixed bottom-4 right-4" on:click={() =>my_modal_1.showModal()}>Agregar medición</button> -->
{#if flag}
	<dialog id="modal" class="modal" open>
		<div class="modal-box">
			<div class="modal-action flex justify-center mt-0">
				<form id="clhonineForm" method="POST" on:submit|preventDefault={onFormSubmit}>
					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Fecha</span>
						</div>
						<input
							type="date"
							name="date"
							bind:value={data.fecha}
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label"></div>
					</label>

					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Hora</span>
						</div>
						<input
							type="time"
							name="time"
							bind:value={data.hora}
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label"></div>
					</label>

					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Sector</span>
						</div>
						<select
							bind:value={data.sector}
							name="location"
							class="select select-bordered w-full max-w-xs"
						>
							<option>Zona Sucia</option>
							<option selected>Zona Intermedia</option>
							<option>Sala de Eviscerado</option>
							<option>Sala de Enfriado</option>
							<option>Empaque de Garras</option>
							<option>Empaque de Pollos</option>
							<option>Sala de Trozado</option>
						</select>
					</label>

					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Grifo</span>
						</div>
						<input
							bind:value={data.grifo}
							type="number"
							name="tap"
							min="00"
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label"></div>
					</label>

					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Concentración (ppm)</span>
						</div>
						<input
							type="number"
							bind:value={data.concentracion}
							name="freeChlorine"
							min="0"
							max="2.5"
							step="0.01"
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label"></div>
					</label>

					<!-- 					<label class="form-control w-full max-w-xs">
						<div class="label">
						  	<span class="label-text">Observaciones</span>
						</div>
							<textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
						<div class="label"></div>
					</label> -->

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
