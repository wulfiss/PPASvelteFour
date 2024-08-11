<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;
</script>

<label class="form-control w-3/4 md:w-full">
	<div class="label">
		<span class="label-text">Fecha</span>
	</div>
	<input
		type="date"
		name="date"
		bind:value={$sectorOneStore.fecha}
		placeholder="Type here"
		class="input input-bordered"
	/>
	<div class="label"></div>
</label>

<label class="form-control w-3/4 md:w-full">
	<div class="label">
		<span class="label-text">Productor</span>
	</div>
	<input
		type="text"
		name="granja"
		bind:value={$sectorOneStore.productor}
		placeholder="nombre"
		class="input input-bordered"
	/>
	<div class="label"></div>
</label>
