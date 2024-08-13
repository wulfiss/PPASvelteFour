<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';

	export let sectorOneStore: Writable<sectorOneData>;
</script>

<div class="divider divider-primary w-3/4">Observaciones Generales</div>
<label class="form-control w-3/4 md:w-full">
	<div class="label">
		<span class="label-text"></span>
		<span class="label-text-alt"></span>
	</div>
	<textarea
		class="textarea textarea-bordered h-24"
		placeholder="Observaciones"
		bind:value={$sectorOneStore.observaciones_generales}
	></textarea>
	<div class="label">
		<span class="label-text-alt"></span>
		<span class="label-text-alt"></span>
	</div>
</label>
