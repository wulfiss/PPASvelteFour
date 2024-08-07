<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;
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

{#each ['leve', 'moderada', 'severa'] as grade}
	<div class="form-control w-3/4 md:w-full">
		<label class="label cursor-pointer">
			<span class="label-text"> Dermatitis {grade}</span>
			<input
				type="checkbox"
				bind:checked={$sectorOneStore[`dermatitis_${grade}`]}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>
{/each}
