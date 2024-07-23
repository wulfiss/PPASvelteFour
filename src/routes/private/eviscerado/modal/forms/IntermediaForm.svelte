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
		observaciones: ''
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
			observaciones: ''
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
			<span class="label-text">Granja</span>
		</div>
		<input
			type="text"
			name="granja"
			bind:value={data.granja}
			placeholder="nombre"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<div class="divider divider-primary">Tamaños</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Pequeños</span>
			<input type="checkbox" bind:checked={data.pollos_chicos} class="checkbox checkbox-primary" />
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Medianos</span>
			<input
				type="checkbox"
				bind:checked={data.pollos_medianos}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Grandes</span>
			<input type="checkbox" bind:checked={data.pollos_grandes} class="checkbox checkbox-primary" />
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Desparejos</span>
			<input
				type="checkbox"
				bind:checked={data.pollos_desparejos}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="divider divider-primary">Buches</div>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Buches (%)</span>
		</div>
		<input
			bind:value={data.buches}
			type="number"
			name="buches"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Pequeños</span>
			<input
				type="checkbox"
				bind:checked={data.buches_pequenos}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Medianos</span>
			<input
				type="checkbox"
				bind:checked={data.buches_medianos}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Grandes</span>
			<input type="checkbox" bind:checked={data.buches_grandes} class="checkbox checkbox-primary" />
		</label>
	</div>

	<div class="divider divider-primary">Alas</div>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Dislocadas sin hematomas (%)</span>
		</div>
		<input
			bind:value={data.dislocadas_sin_hematomas}
			type="number"
			name="dislocadasSinHematomas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Dislocadas con hematomas recientes (%)</span>
		</div>
		<input
			bind:value={data.dislocadas_hematomas_recientes}
			type="number"
			name="dislocadasRecientes"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Dislocadas con hematomas viejos (%)</span>
		</div>
		<input
			bind:value={data.dislocadas_hematomas_viejos}
			type="number"
			name="dislocadasViejas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<div class="divider divider-secondary"></div>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Fracturadas sin hematomas (%)</span>
		</div>
		<input
			bind:value={data.fracturadas_sin_hematomas}
			type="number"
			name="fracturadasSinHematomas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Fracturadas con hematomas recientes (%)</span>
		</div>
		<input
			bind:value={data.fracturadas_hematomas_recientes}
			type="number"
			name="fracturadasRecientes"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Fracturadas con hematomas viejos (%)</span>
		</div>
		<input
			bind:value={data.fracturadas_hematomas_viejos}
			type="number"
			name="fracturadasViejas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Puntas fracturadas (%)</span>
		</div>
		<input
			bind:value={data.puntas_quebradas}
			type="number"
			name="puntasFracturadas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<div class="divider divider-primary">Dermatitis</div>
	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Dermatitis (%)</span>
		</div>
		<input
			bind:value={data.dermatitis}
			type="number"
			name="puntasFracturadas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Leve</span>
			<input
				type="checkbox"
				bind:checked={data.dermatitis_leve}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Moderada</span>
			<input
				type="checkbox"
				bind:checked={data.dermatitis_moderada}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Severa</span>
			<input
				type="checkbox"
				bind:checked={data.dermatitis_severa}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>

	<div class="divider divider-primary">Otros</div>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Miopatias (%)</span>
		</div>
		<input
			bind:value={data.miopatias}
			type="number"
			name="miopatias"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
		<div class="label"></div>
	</label>

	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Traqueas (%)</span>
		</div>
		<input
			bind:value={data.traqueas}
			type="number"
			name="traqueas"
			min="0"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
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
		<button type="submit" class="btn flex-1 btn-success">Guardar</button>
	</div>
</form>
