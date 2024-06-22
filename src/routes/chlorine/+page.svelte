<script lang="ts">
  import { goto } from '$app/navigation';
  import Downloadbtn  from './downloadButton/downloadBtn.svelte';
  import PaginationBtn from '$lib/components/paginationButton/paginationBtn.svelte';
  
  export let data;
  
  console.log(typeof data.props.freechlorine)
    
  let filteredItems;
  let searchTerm = "";


  $: filteredItems = data.props.freechlorine.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
            
    return item.date.toLowerCase().includes(searchLower) || 
           item.location.toLowerCase().includes(searchLower) ||
           item.tap.toString().toLowerCase().includes(searchLower);
  });
  
  let currentPage = 1;
  let itemsPerPage = 10;

  $: totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  $: paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  $: {
    searchTerm;
    currentPage = 1;
  }
  
  function handlePageChange(event: CustomEvent< {page: number}>){
    currentPage = event.detail.page;
  }

  function handleClick() {
      goto('/chlorine/form');
  }

</script>
  
<div class="overflow-x-auto">
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Filtrar por fecha, sector o grifo" bind:value={searchTerm}/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
  </label>
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th class="text-center">Fecha</th>
          <th class="text-center">Hora</th>
          <th class="text-center">Sector</th>
          <th class="text-center">Grifo</th>
          <th class="text-center">Concentración (ppm)</th>
        </tr>
      </thead>
      <tbody>
        <!-- body -->
        {#each paginatedItems as item, i}
        <tr>
          <th class="text-center">{item.date}</th>
          <td class="text-center">{item.time}</td>
          <td class="text-center">{item.location}</td>
          <td class="text-center">{item.tap}</td>
          <td class="text-center">{item.freeChlorine}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
  {#if filteredItems.length > 0}
  <PaginationBtn totalItems={filteredItems.length} 
  {itemsPerPage} 
  {currentPage} 
  on:pageChange={handlePageChange}/>
  {:else}
  <p class="text-center">No hay datos</p>
  {/if}
  <button class="btn fixed bottom-4 right-40" on:click={handleClick}>Agregar medición</button>
  <Downloadbtn />