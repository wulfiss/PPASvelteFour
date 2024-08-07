<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;

	type InputField = {
		label: string;
		key: keyof sectorOneData;
	};

	const inputField: InputField[] = [
		{
			label: 'Cogotes (%)',
			key: 'cogotes'
		},
		{
			label: 'Pulmones (%)',
			key: 'pulmones'
		},
		{
			label: 'Cloacas (%)',
			key: 'cloacas'
		},
		{
			label: 'Patas Fracturadas (%)',
			key: 'patas_fracturadas'
		}
	];
</script>

<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
	<div class="divider divider-primary w-3/4">Eviscerado</div>
	{#each inputField as field}
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

	<label class="form-control w-3/4 md:w-full">
		<div class="label">
			<span class="label-text">Sangre en patas</span>
			<input type="checkbox" class="toggle" bind:checked={$sectorOneStore.sangre} />
		</div>
		<div class="label"></div>
	</label>
</div>
