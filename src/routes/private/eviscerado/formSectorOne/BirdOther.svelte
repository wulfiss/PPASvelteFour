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
			label: 'Miopatias (%)',
			key: 'miopatias'
		},
		{
			label: 'Traqueas (%)',
			key: 'traqueas'
		}
	];
</script>

<div class="divider divider-primary w-3/4">Otros</div>
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
