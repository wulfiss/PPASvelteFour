<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;
</script>

<div class="divider divider-primary w-3/4">Buches</div>

<label class="form-control w-3/4 md:w-full">
	<div class="label">
		<span class="label-text">Buches (%)</span>
	</div>
	<input
		bind:value={$sectorOneStore.buches}
		type="number"
		name="buches"
		min="0"
		placeholder="Type here"
		class="input input-bordered"
	/>
	<div class="label"></div>
</label>

<div class="divider divider-primary w-3/4">Tamaños de Buches</div>
{#each ['chicos', 'medianos', 'grandes'] as size}
	<div class="form-control w-3/4 md:w-full">
		<label class="label cursor-pointer">
			<span class="label-text">{size.charAt(0).toUpperCase() + size.slice(1)}</span>
			<input
				type="checkbox"
				bind:checked={$sectorOneStore[`buches_${size}`]}
				class="checkbox checkbox-primary"
			/>
		</label>
	</div>
{/each}
