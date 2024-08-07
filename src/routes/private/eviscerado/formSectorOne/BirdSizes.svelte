<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;
</script>

<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
	<div class="divider divider-primary w-3/4">Tamaños de aves</div>
	{#each ['chicos', 'medianos', 'grandes', 'desparejos'] as size}
		<div class="form-control w-3/4 md:w-full">
			<label class="label cursor-pointer">
				<span class="label-text">{size.charAt(0).toUpperCase() + size.slice(1)}</span>
				<input
					type="checkbox"
					bind:checked={$sectorOneStore[`pollos_${size}`]}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>
	{/each}
</div>

<label class="form-control w-3/4 md:w-full">
	<div class="label">
		<span class="label-text">Pollos rotos (%)</span>
	</div>
	<input
		bind:value={$sectorOneStore.aves_rotas}
		type="number"
		name="pollosRotos"
		min="0"
		placeholder="Type here"
		class="input input-bordered"
	/>
	<div class="label"></div>
</label>
