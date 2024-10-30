<script lang="ts">
  import type { ZonaLimpiaData } from '$lib/types';
  import type { Writable } from 'svelte/store';

  export let store: Writable<ZonaLimpiaData>;
</script>

<label class="form-control w-3/4 md:w-full">
  <div class="label">
    <span class="label-text">Fecha de elaboración</span>
  </div>
  <input
    type="date"
    name="date"
    bind:value={$store.fecha}
    placeholder="Type here"
    class="input input-bordered"
  />
  <div class="label"></div>
  <div class="label">
    <span class="label-text">Fecha de Vencimiento</span>
  </div>
  <input
    type="date"
    name="date"
    bind:value={$store.fecha}
    placeholder="Type here"
    class="input input-bordered"
  />
  <div class="label"></div>
</label>
