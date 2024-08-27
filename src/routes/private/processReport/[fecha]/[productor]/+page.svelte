<script lang="ts">
  import { onMount } from 'svelte';

  import ZonaIntermedia from './tabs/ZonaIntermedia.svelte';
  import ZonaLimpia from './tabs/ZonaLimpia.svelte';
  import ZonaSucia from './tabs/ZonaSucia.svelte';
  import Temperaturas from './tabs/Temperaturas.svelte';
  import Cloro from './tabs/Cloro.svelte';
  import Observaciones from './tabs/Observaciones.svelte';
  import Download from './tabs/Download.svelte';

	import { page } from '$app/stores';
  
  let tabsContainer: HTMLDivElement;
  let currentTab: string = 'ZonaIntermedia';
  
  interface Tab {
  id: string;
  label: string;
  }
  
  const tabs: Tab[] = [
  { id: 'ZonaSucia', label: 'Zona Sucia' },
  { id: 'ZonaIntermedia', label: 'Zona Intermedia' },
  { id: 'ZonaLimpia', label: 'Zona Limpia' },
  { id: 'Temperaturas', label: 'Temperaturas' },
  { id: 'Cloro', label: 'Cloro' },
  { id: 'Observaciones', label: 'Observaciones' },
  { id: 'Download', label: 'Descargas' },
  ];
  
  onMount(() => {
  const scrollContainer = tabsContainer.querySelector('.scroll-container') as HTMLDivElement;
  let isDown = false;
  let startX: number;
  let scrollLeft: number;
  
  const handleMouseDown = (e: MouseEvent) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  };
  
  const handleMouseLeave = () => {
    isDown = false;
  };
  
  const handleMouseUp = () => {
    isDown = false;
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
  };
  
  scrollContainer.addEventListener('mousedown', handleMouseDown);
  scrollContainer.addEventListener('mouseleave', handleMouseLeave);
  scrollContainer.addEventListener('mouseup', handleMouseUp);
  scrollContainer.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    scrollContainer.removeEventListener('mousedown', handleMouseDown);
    scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    scrollContainer.removeEventListener('mouseup', handleMouseUp);
    scrollContainer.removeEventListener('mousemove', handleMouseMove);
  };
  });

  </script>
  
  <div bind:this={tabsContainer} class="relative w-full overflow-hidden">
  <div class="scroll-container overflow-x-auto">
  <div role="tablist" class="tabs tabs-bordered whitespace-nowrap">
    {#each tabs as tab}
      <a role="tab" 
          class="{currentTab === tab.id ? 'tab tab-active' : 'tab'}" 
          data-tab-id={tab.id} on:click={() => currentTab = tab.id}>
          {tab.label}
      </a>
    {/each}
  </div>
  </div>
  <div class="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-base-100 to-transparent pointer-events-none"></div>
  </div>
  
  {#if currentTab === 'ZonaSucia'}
    <ZonaSucia />
    {:else if currentTab === 'ZonaIntermedia'}
    <ZonaIntermedia datas={$page.data.zonaIntermediaData} />
    {:else if currentTab === 'ZonaLimpia'}
    <ZonaLimpia />
    {:else if currentTab === 'Temperaturas'}
    <Temperaturas />
    {:else if currentTab === 'Cloro'}
    <Cloro data={$page.data.cloroLibreData}/>
    {:else if currentTab === 'Observaciones'}
    <Observaciones data={$page.data.generalObservationsData} />
    {:else if currentTab === 'Download'}
    <Download />
  {/if}


  <style>
  .scroll-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
  .scroll-container::-webkit-scrollbar {
  display: none;
  }
  </style>