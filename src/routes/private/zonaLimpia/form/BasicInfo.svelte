<script lang="ts">
  import type { ZonaLimpiaData } from '$lib/types';
  import type { Writable } from 'svelte/store';
  import { nameStore, farmsStore, shedStore } from '$lib/stores/productorsList';
  import Combobox from '$lib/components/ComboBox/Combobox.svelte';

  export let zonaLimpiaStore: Writable<ZonaLimpiaData>;

  function handleSelect(event) {
    $zonaLimpiaStore.productor = event.detail.selectedValue;
  }
</script>

<label class="form-control w-3/4 md:w-full">
  <div class="label">
    <span class="label-text">Fecha</span>
  </div>
  <input
    type="date"
    name="date"
    bind:value={$zonaLimpiaStore.fecha}
    placeholder="Type here"
    class="input input-bordered"
  />
  <div class="label"></div>
</label>

<Combobox
  classList="form-control w-3/4 md:w-full"
  options={$nameStore}
  placeholder="Seleccionar un productor."
  bind:selectedValue={$zonaLimpiaStore.productor}
  on:select={handleSelect}
/>

<label class="form-control w-3/4 md:w-full">
  <div class="label">
    <span class="label-text">Granja</span>
    <span class="label-text-alt"></span>
  </div>
  <select bind:value={$zonaLimpiaStore.granja} class="select select-bordered">
    <option disabled selected>Seleccionar un granja</option>
    {#each $farmsStore as granja}
      <option value={granja}>{granja}</option>
    {/each}
  </select>
  <div class="label">
    <span class="label-text-alt"></span>
    <span class="label-text-alt"></span>
  </div>
</label>

<label class="form-control w-3/4 md:w-full">
  <div class="label">
    <span class="label-text">Galpón</span>
    <span class="label-text-alt"></span>
  </div>
  <select bind:value={$zonaLimpiaStore.galpon} class="select select-bordered">
    <option disabled selected>Seleccionar un Galpón</option>
    {#each $shedStore as galpon}
      <option value={galpon}>{galpon}</option>
    {/each}
  </select>
  <div class="label">
    <span class="label-text-alt"></span>
    <span class="label-text-alt"></span>
  </div>
</label>
