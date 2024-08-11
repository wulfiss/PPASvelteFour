<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;
</script>

<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
	<div class="divider divider-primary w-3/4">Garras</div>
	{#each ['lindas', 'regulares', 'feas'] as grade}
		<div class="form-control w-3/4 md:w-full">
			<label class="label cursor-pointer">
				<span class="label-text">Garras {grade}</span>
				<input
					type="checkbox"
					bind:checked={$sectorOneStore[`garras_${grade}`]}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>
	{/each}

	<label class="form-control w-3/4 md:w-full">
		<div class="label">
			<span class="label-text">Observaciones</span>
			<span class="label-text-alt"></span>
		</div>
		<textarea
			class="textarea textarea-bordered h-24"
			placeholder="Observaciones"
			bind:value={$sectorOneStore.observaciones_garras}
		></textarea>
		<div class="label">
			<span class="label-text-alt"></span>
			<span class="label-text-alt"></span>
		</div>
	</label>
</div>
