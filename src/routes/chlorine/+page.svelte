<script lang="ts">
  import { goto } from '$app/navigation';
  import Downloadbtn  from './downloadButton/downloadBtn.svelte';
  import PaginationBtn from '$lib/components/paginationButton/paginationBtn.svelte';
  import { invalidate } from "$app/navigation";

  export let data;
    
  let filteredItems: any[];
  let searchTerm = "";


  $: filteredItems = data.cloroLibre.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
            
    return item.fecha.toLowerCase().includes(searchLower) || 
           item.sector.toLowerCase().includes(searchLower) ||
           item.grifo.toString().toLowerCase().includes(searchLower);
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

  async function handleEdit(item: { id: any; }) {
    goto(`/chlorine/editButton/${item.id}`);
  }

  async function handleDelete(item: { id: any; }) {
    goto(`/chlorine/deleteButton/${item.id}`);
  }

 /*  async function shortTime (time: { toLocaleTimeString: (arg0: string, arg1: { hour: string; minute: string; }) => any; }) {
    const timetrimmed = await time.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit'
    })

    return timetrimmed;
  } */

</script>
<div id="header" class="flex flex-row justify-center gap-2">
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Filtrar por fecha, sector o grifo" bind:value={searchTerm}/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
  </label>
  <button class="btn" on:click={handleClick}><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.75 3a.75.75 0 0 1 .743.648l.007.102.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75Z" fill="#212121"/></svg></button>
  <Downloadbtn />
</div>
<div class="overflow-x-auto">
  <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th class="text-center">Fecha</th>
          <th class="text-center">Hora</th>
          <th class="text-center">Sector</th>
          <th class="text-center">Grifo</th>
          <th class="text-center">Concentración<br>(ppm)</th>
        </tr>
      </thead>
      <tbody>
        <!-- body -->
        {#each paginatedItems as item, i}
        <tr>
          <th class="text-center">{item.fecha}</th>
          <td class="text-center">{item.hora}</td>
          <td class="text-center">{item.sector}</td>
          <td class="text-center">{item.grifo}</td>
          <td class="text-center">{item.concentracion}</td>
          <td class="text-center flex">
            <button class="btn btn-sm btn-primary mr-2">Editar</button>
            <button on:click={() => handleDelete(item)} class='btn btn-sm btn-error'>
              Eliminar
          </button>
            <!-- <DeleteButton id={item.id} on:deleted={handleItemDeleted} /> -->

        </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="flex flex-row justify-center mt-1">
    {#if filteredItems.length > 0}
    <PaginationBtn totalItems={filteredItems.length} 
    {itemsPerPage} 
    {currentPage} 
    on:pageChange={handlePageChange}/>
    {:else}
    <p class="text-center">No hay datos</p>
    {/if}
  </div>

  
  