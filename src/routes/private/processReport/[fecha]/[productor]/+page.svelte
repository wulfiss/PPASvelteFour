<script lang="ts">
    import type { PageData } from './$types';
    import AccordionZonaIntermedia from './accodions/AccordionZonaIntermedia.svelte';
	
	export let data: PageData;
    let checked = "checked";
    /* console.log(data); */
</script>

<div role="tablist" class="tabs tabs-lifted p-2">
    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Zona Sucia" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 1
    </div>
  
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      class="tab"
      aria-label="Zona Intermedia"
      checked="checked" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
        {#each data.data as item}
            <AccordionZonaIntermedia data={item}/>
        {/each}
    </div>

    
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      class="tab"
      aria-label="Zona Limpia" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 2
    </div>

    
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      class="tab"
      aria-label="Temperaturas" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 2
    </div>
  
    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Cloro" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 3
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Observaciones" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 3
    </div>
  </div>