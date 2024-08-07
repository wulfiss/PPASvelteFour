<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;

	type InputField = {
		label: string;
		key: keyof sectorOneData;
	};

	const dislocatedWingsInputField: InputField[] = [
		{ label: 'Alas dislocadas sin hematomas (%)', key: 'alas_dislocadas_sin_hematomas' },
		{
			label: 'Alas dislocadas con hematomas recientes (%)',
			key: 'alas_dislocadas_hematomas_recientes'
		},
		{ label: 'Alas dislocadas con hematomas viejos (%)', key: 'alas_dislocadas_hematomas_viejos' }
	];

	const brokenWingsInputField: InputField[] = [
		{ label: 'Alas fracturadas sin hematomas (%)', key: 'alas_fracturadas_sin_hematomas' },
		{
			label: 'Alas fracturadas con hematomas recientes (%)',
			key: 'alas_fracturadas_hematomas_recientes'
		},
		{
			label: 'Alas fracturadas con hematomas viejos (%)',
			key: 'alas_fracturadas_hematomas_viejos'
		},
		{ label: 'Puntas de alas fracturadas (%)', key: 'alas_puntas_fracturadas' }
	];
</script>

<div class="divider divider-secondary w-3/4"></div>

{#each brokenWingsInputField as field}
	<label class="form-control w-3/4 md:w-full">
		<div class="label">
			<span class="label-text">{field.label}</span>
		</div>
		<input
			bind:value={$sectorOneStore[field.key]}
			type="number"
			name={field.key}
			min="0"
			placeholder="Type here"
			class="input input-bordered"
		/>
		<div class="label"></div>
	</label>
{/each}

{#each dislocatedWingsInputField as field}
	<label class="form-control w-3/4 md:w-full">
		<div class="label">
			<span class="label-text">{field.label}</span>
		</div>
		<input
			bind:value={$sectorOneStore[field.key]}
			type="number"
			name={field.key}
			min="0"
			placeholder="Type here"
			class="input input-bordered"
		/>
		<div class="label"></div>
	</label>
{/each}
