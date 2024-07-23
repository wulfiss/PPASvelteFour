<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let date = new Date();
	let today = date.toISOString().slice(0, 10); // YYYY-MM-DD
	let time = date.toLocaleTimeString('en-US', {
		hour12: false, // Ensure 24-hour format
		hour: '2-digit',
		minute: '2-digit'
	});

	let data = {
		fecha: today,
		granja: '',
		garras_lindas: false,
		garras_regulares: false,
		garras_feas: false,
		observaciones: ''
	};

	function resetForm() {
		data = {
			fecha: today,
			granja: '',
			garras_lindas: false,
			garras_regulares: false,
			garras_feas: false,
			observaciones: ''
		};
	}

	async function onFormSubmit() {
		try {
			const response = await fetch('/private/eviscerado/endpoints/garras', {
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
		} catch (error) {
			console.error('Error:', error);
			alert('Error al enviar los datos');
		}
	}
</script>

<form id="garrasForm" method="POST" on:submit|preventDefault={onFormSubmit}>
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
			<span class="label-text">Granja</span>
		</div>
		<input
			type="text"
			name="granja"
			bind:value={data.granja}
			placeholder="Type here"
			class="input input-bordered w-full"
		/>
		<div class="label"></div>
	</label>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Feas</span>
			<input type="checkbox" bind:checked={data.garras_feas} class="checkbox checkbox-primary" />
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Regulares</span>
			<input
				type="checkbox"
				bind:checked={data.garras_regulares}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Lindas</span>
			<input type="checkbox" bind:checked={data.garras_lindas} class="checkbox checkbox-primary" />
		</label>
	</div>

	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Observaciones</span>
			<span class="label-text-alt"></span>
		</div>
		<textarea
			class="textarea textarea-bordered h-24"
			placeholder="Observaciones"
			bind:value={data.observaciones}
		></textarea>
		<div class="label">
			<span class="label-text-alt"></span>
			<span class="label-text-alt"></span>
		</div>
	</label>

	<div class="flex space-x-1">
		<button type="submit" class="btn flex-1 btn-success">Guardar</button>
	</div>
</form>
