<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;

	type InputField = {
		label: string;
		key: keyof sectorOneData;
	};

	const dermatitisInputField: InputField[] = [
		{
			label: 'Dermatitis leve (%)',
			key: 'dermatitis_leve'
		},
		{
			label: 'Dermatitis moderada (%)',
			key: 'dermatitis_moderada'
		},
		{
			label: 'Dermatitis severa (%)',
			key: 'dermatitis_severa'
		}
	];
</script>

<label class="form-control w-3/4 md:w-full">
	<div class="label">
		<span class="label-text">Dermatitis (%)</span>
	</div>
	<input
		bind:value={$sectorOneStore.dermatitis}
		type="number"
		name="puntasFracturadas"
		min="0"
		placeholder="Type here"
		class="input input-bordered"
	/>
	<div class="label"></div>
</label>

{#each dermatitisInputField as field}
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
