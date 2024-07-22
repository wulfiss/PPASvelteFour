<script lang="ts">
	let date = new Date();
	let today = date.toISOString().slice(0, 10); // YYYY-MM-DD
	let time = date.toLocaleTimeString('en-US', {
		hour12: false, // Ensure 24-hour format
		hour: '2-digit',
		minute: '2-digit'
	});

	let data = {
		fecha: today,
		pollos_chicos: false,
		pollos_medianos: false,
		pollos_grandes: false,
		pollos_desparejos: false,
		buches: 0,
		buches_pequenos: false,
		buches_medianos: false,
		buches_grandes: false,
		pollos_rotos: 0,
		dislocadas_hematomas_recientes: 0,
		dislocadas_hematomas_viejos: 0,
		dislocadas_sin_hematomas: 0,
		fracturadas_hematomas_recientes: 0,
		fracturadas_hematomas_viejos: 0,
		fracturadas_sin_hematomas: 0,
		puntas_quebradas: 0,
		miopatias: 0,
		dermatitis: 0,
		dermatitis_leve: false,
		dermatitis_moderada: false,
		dermatitis_severa: false,
		traqueas: 0,
		granja: '',
		observaciones: '',
	};

	function resetForm() {
		data = {
			fecha: today,
			pollos_chicos: false,
			pollos_medianos: false,
			pollos_grandes: false,
			pollos_desparejos: false,
			buches: 0,
			buches_pequenos: false,
			buches_medianos: false,
			buches_grandes: false,
			pollos_rotos: 0,
			dislocadas_hematomas_recientes: 0,
			dislocadas_hematomas_viejos: 0,
			dislocadas_sin_hematomas: 0,
			fracturadas_hematomas_recientes: 0,
			fracturadas_hematomas_viejos: 0,
			fracturadas_sin_hematomas: 0,
			puntas_quebradas: 0,
			miopatias: 0,
			dermatitis: 0,
			dermatitis_leve: false,
			dermatitis_moderada: false,
			dermatitis_severa: false,
			traqueas: 0,
			granja: '',
			observaciones: '',
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
		} catch (error) {
			console.error('Error:', error);
			alert('Error al enviar los datos');
		}
	}

</script>

<form id="intermediaForm" method="POST" on:submit|preventDefault={onFormSubmit}>
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
			<span class="label-text">Cogotes (%)</span>
		</div>
		<input
			type="number"
			name="cogotes"
			min="0"
			bind:value={data.cogotes}
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Pulmones (%)</span>
		</div>
		<input
			bind:value={data.pulmones}
			type="number"
			name="pulmones"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Cloacas (%)</span>
		</div>
		<input
			bind:value={data.cloacas}
			type="number"
			name="cloacas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Patas Fracturadas (%)</span>
		</div>
		<input
			bind:value={data.pataFracturadas}
			type="number"
			name="pataFracturadas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Sangre en patas</span>

			<input type="checkbox" class="toggle" bind:checked={data.sangre} />
		</div>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
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
