<script lang="ts">
  import { goto } from '$app/navigation';
  import BasicInfo from './form/BasicInfo.svelte';
  import zonaLimpiaStore from '$lib/stores/zonaLimpiaStore';
  import BasicInfoS from '$lib/components/BasicInfo/BasicInfoS.svelte';

  const closeForm = () => goto('/private/');
  const showObservation = true;
  async function onFormSubmit() {
    /*     try {
      const response = await fetch('/private/eviscerado/endpoints/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify($ZonaLimpiaStore),
      });
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
      closeForm();
      ZonaLimpiaStore.set({
        fecha: '',
        productor: '',
        granja: '',
        galpon: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar los datos');
    } */
  }
</script>

<form on:submit|preventDefault={onFormSubmit} class="flex flex-col lg:flex-row p-2">
  <div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
    <BasicInfo {zonaLimpiaStore} />
    <BasicInfoS store={zonaLimpiaStore} {showObservation} />
  </div>
  <div class="divider lg:divider-horizontal"></div>
  <div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
    <!--   <BirdSizes {sectorOneStore} />
    <BirdCrop {sectorOneStore} />
    <BirdWings {sectorOneStore} />
    <BirdDermatitis {sectorOneStore} />
    <BirdOther {sectorOneStore} /> -->
  </div>
  <div class="divider lg:divider-horizontal"></div>
  <!--   <BirdPaw {sectorOneStore} /> -->
  <div class="divider lg:divider-horizontal"></div>
  <!--   <Gutted {sectorOneStore} /> -->

  <div class="divider lg:divider-horizontal"></div>
  <div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
    <!--     <ObservationSectorOne {sectorOneStore} /> -->
    <div class="divider lg:divider-horizontal"></div>
    <div class="m-2 md:m-0 flex space-x-1">
      <button type="button" class="btn btn-error" on:click={closeForm}> Cerrar </button>
      <button type="submit" class="btn flex-1 btn-success" disabled={!$zonaLimpiaStore.productor}>
        Guardar
      </button>
    </div>
  </div>
</form>
