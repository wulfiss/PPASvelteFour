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
		productor: '',
		pollos_chicos: false,
		pollos_medianos: false,
		pollos_grandes: false,
		pollos_desparejos: false,
		buches: 0,
		buches_chicos: false,
		buches_medianos: false,
		buches_grandes: false,
		pollos_rotos: 0,
		alas_dislocadas_hematomas_recientes: 0,
		alas_dislocadas_hematomas_viejos: 0,
		alas_dislocadas_sin_hematomas: 0,
		alas_fracturadas_hematomas_recientes: 0,
		alas_fracturadas_hematomas_viejos: 0,
		alas_fracturadas_sin_hematomas: 0,
		alas_puntas_fracturadas: 0,
		miopatias: 0,
		dermatitis: 0,
		dermatitis_leve: false,
		dermatitis_moderada: false,
		dermatitis_severa: false,
		traqueas: 0,
		intermedia_observaciones: '',
		garras_lindas: false,
		garras_regulares: false,
		garras_feas: false,
		garras_observaciones: '',
		cogotes: 0,
		pulmones: 0,
		cloacas: 0,
		patas_fracturadas: 0,
		sangre: false,
		eviscerado_observaciones: ''
	};

	function resetForm() {
		data = {
			fecha: today,
			productor: '',
			pollos_chicos: false,
			pollos_medianos: false,
			pollos_grandes: false,
			pollos_desparejos: false,
			buches: 0,
			buches_chicos: false,
			buches_medianos: false,
			buches_grandes: false,
			pollos_rotos: 0,
			alas_dislocadas_hematomas_recientes: 0,
			alas_dislocadas_hematomas_viejos: 0,
			alas_dislocadas_sin_hematomas: 0,
			alas_fracturadas_hematomas_recientes: 0,
			alas_fracturadas_hematomas_viejos: 0,
			alas_fracturadas_sin_hematomas: 0,
			alas_puntas_fracturadas: 0,
			miopatias: 0,
			dermatitis: 0,
			dermatitis_leve: false,
			dermatitis_moderada: false,
			dermatitis_severa: false,
			traqueas: 0,
			intermedia_observaciones: '',
			garras_lindas: false,
			garras_regulares: false,
			garras_feas: false,
			garras_observaciones: '',
			cogotes: 0,
			pulmones: 0,
			cloacas: 0,
			patas_fracturadas: 0,
			sangre: false,
			eviscerado_observaciones: ''
		};
	}

	async function onFormSubmit() {
		try {
			const response = await fetch('/private/eviscerado/endpoints/allForm', {
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

<form
	id="intermediaForm"
	class=""
	method="POST"
	on:submit|preventDefault={onFormSubmit}
>
<div class="flex w-full flex-col lg:flex-row">
	<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
		<div id="info">
			<label class="form-control">
				<div class="label">
					<span class="label-text">Fecha</span>
				</div>
				<input
					type="date"
					name="date"
					bind:value={data.fecha}
					placeholder="Type here"
					class="input input-bordered"
				/>
				<div class="label"></div>
			</label>
	
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Productor</span>
				</div>
				<input
					type="text"
					name="granja"
					bind:value={data.productor}
					placeholder="nombre"
					class="input input-bordered w-full"
				/>
				<div class="label"></div>
			</label>
		</div>
	</div>
<div class="divider lg:divider-horizontal"></div>


<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
	<div id="intermedia">
		<div class="divider divider-primary">Tamaños</div>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Pequeños</span>
				<input
					type="checkbox"
					bind:checked={data.pollos_chicos}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Medianos</span>
				<input
					type="checkbox"
					bind:checked={data.pollos_medianos}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Grandes</span>
				<input
					type="checkbox"
					bind:checked={data.pollos_grandes}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control w-full">
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

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Buches (%)</span>
			</div>
			<input
				bind:value={data.buches}
				type="number"
				name="buches"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Pequeños</span>
				<input
					type="checkbox"
					bind:checked={data.buches_chicos}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Medianos</span>
				<input
					type="checkbox"
					bind:checked={data.buches_medianos}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Grandes</span>
				<input
					type="checkbox"
					bind:checked={data.buches_grandes}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="divider divider-primary">Alas</div>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Dislocadas sin hematomas (%)</span>
			</div>
			<input
				bind:value={data.alas_dislocadas_sin_hematomas}
				type="number"
				name="dislocadasSinHematomas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Dislocadas con hematomas recientes (%)</span>
			</div>
			<input
				bind:value={data.alas_dislocadas_hematomas_recientes}
				type="number"
				name="dislocadasRecientes"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Dislocadas con hematomas viejos (%)</span>
			</div>
			<input
				bind:value={data.alas_dislocadas_hematomas_viejos}
				type="number"
				name="dislocadasViejas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<div class="divider divider-secondary"></div>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Fracturadas sin hematomas (%)</span>
			</div>
			<input
				bind:value={data.alas_fracturadas_sin_hematomas}
				type="number"
				name="fracturadasSinHematomas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Fracturadas con hematomas recientes (%)</span>
			</div>
			<input
				bind:value={data.alas_fracturadas_hematomas_recientes}
				type="number"
				name="fracturadasRecientes"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Fracturadas con hematomas viejos (%)</span>
			</div>
			<input
				bind:value={data.alas_fracturadas_hematomas_viejos}
				type="number"
				name="fracturadasViejas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Puntas fracturadas (%)</span>
			</div>
			<input
				bind:value={data.alas_puntas_fracturadas}
				type="number"
				name="puntasFracturadas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<div class="divider divider-primary">Dermatitis</div>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Dermatitis (%)</span>
			</div>
			<input
				bind:value={data.dermatitis}
				type="number"
				name="puntasFracturadas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
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

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Moderada</span>
				<input
					type="checkbox"
					bind:checked={data.dermatitis_moderada}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control w-full">
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

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Miopatias (%)</span>
			</div>
			<input
				bind:value={data.miopatias}
				type="number"
				name="miopatias"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Traqueas (%)</span>
			</div>
			<input
				bind:value={data.traqueas}
				type="number"
				name="traqueas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Observaciones</span>
				<span class="label-text-alt"></span>
			</div>
			<textarea
				class="textarea textarea-bordered h-24"
				placeholder="Observaciones"
				bind:value={data.intermedia_observaciones}
			></textarea>
			<div class="label">
				<span class="label-text-alt"></span>
				<span class="label-text-alt"></span>
			</div>
		</label>
	</div>
</div>
<div class="divider lg:divider-horizontal"></div>


<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
	<div id="garras">
		<div class="divider divider-primary">Garras</div>
		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Feas</span>
				<input type="checkbox" bind:checked={data.garras_feas} class="checkbox checkbox-primary" />
			</label>
		</div>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Regulares</span>
				<input
					type="checkbox"
					bind:checked={data.garras_regulares}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Lindas</span>
				<input
					type="checkbox"
					bind:checked={data.garras_lindas}
					class="checkbox checkbox-primary"
				/>
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
				bind:value={data.garras_observaciones}
			></textarea>
			<div class="label">
				<span class="label-text-alt"></span>
				<span class="label-text-alt"></span>
			</div>
		</label>
	</div>
</div>
<div class="divider lg:divider-horizontal"></div>


<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
	<div id="eviscerado">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Cogotes (%)</span>
			</div>
			<input
				type="number"
				name="cogotes"
				min="0"
				bind:value={data.cogotes}
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Pulmones (%)</span>
			</div>
			<input
				bind:value={data.pulmones}
				type="number"
				name="pulmones"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Cloacas (%)</span>
			</div>
			<input
				bind:value={data.cloacas}
				type="number"
				name="cloacas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Patas Fracturadas (%)</span>
			</div>
			<input
				bind:value={data.patas_fracturadas}
				type="number"
				name="pataFracturadas"
				min="0"
				placeholder="Type here"
				class="input input-bordered w-full"
			/>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Sangre en patas</span>

				<input type="checkbox" class="toggle" bind:checked={data.sangre} />
			</div>
			<div class="label"></div>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Observaciones</span>
				<span class="label-text-alt"></span>
			</div>
			<textarea
				class="textarea textarea-bordered h-24"
				placeholder="Observaciones"
				bind:value={data.eviscerado_observaciones}
			></textarea>
			<div class="label">
				<span class="label-text-alt"></span>
				<span class="label-text-alt"></span>
			</div>
		</label>
	</div>
</div>

<div class="divider lg:divider-horizontal"></div>
<div class="m-2 md:m-0 flex space-x-1">
		<button
		type="button"
		class="btn btn-error"
		on:click={() => {
		}}>Cerrar</button
	>
		{#if data.productor != ''}
			<button type="submit" class="btn flex-1 btn-success">Guardar</button>
		{:else}
			<button class="btn btn-disabled flex-1" tabindex="-1" aria-disabled="true">Guardar</button>
		{/if}
</div>
</form>
