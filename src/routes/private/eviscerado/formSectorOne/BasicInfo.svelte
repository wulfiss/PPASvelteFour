<script lang="ts">
	import type { sectorOneData } from '$lib/types';
	import type { Writable } from 'svelte/store';
	import { nameStore } from '$lib/stores/productorsList';
	import Combobox from '$lib/components/ComboBox/Combobox.svelte';

	export let sectorOneStore: Writable<sectorOneData>;

  	function handleSelect(event) {
    	$sectorOneStore.productor = event.detail.selectedValue;
  	}	

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

<!-- <label class="form-control w-3/4 md:w-full">
	<div class="label">
	  <span class="label-text">Productor</span>
	  <span class="label-text-alt"></span>
	</div>
	<select bind:value={$sectorOneStore.productor} class="select select-bordered">
	  <option disabled selected>Seleccionar un produc.</option>
	  {#each $nameStore as  nombre}
		<option value={nombre}>{nombre}</option>
	  {/each}
	</select>
	<div class="label">
	  <span class="label-text-alt"></span>
	  <span class="label-text-alt"></span>
	</div>
  </label> -->

<Combobox
	classList= "form-control w-3/4 md:w-full"
  	options={$nameStore}
  	placeholder="Seleccionar un productor."
  	bind:selectedValue={$sectorOneStore.productor}
  	on:select={handleSelect}
/>

<div class="divider divider-primary w-3/4">Obs. de Aves</div>

<label class="form-control w-3/4 md:w-full">
	<div class="label">
		<span class="label-text"></span>
		<span class="label-text-alt"></span>
	</div>
	<textarea
		class="textarea textarea-bordered h-24"
		placeholder="Observaciones"
		bind:value={$sectorOneStore.observaciones_aves}
	></textarea>
	<div class="label">
		<span class="label-text-alt"></span>
		<span class="label-text-alt"></span>
	</div>
</label>