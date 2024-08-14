<script lang="ts">
	import sectorOneStore from '$lib/stores/sectorOneStore';
	import { goto } from '$app/navigation';
	import BasicInfo from './formSectorOne/BasicInfo.svelte';
	import BirdSizes from './formSectorOne/BirdSizes.svelte';
	import BirdCrop from './formSectorOne/BirdCrop.svelte';
	import BirdDermatitis from './formSectorOne/BirdDermatitis.svelte';
	import BirdPaw from './formSectorOne/BirdPaw.svelte';
	import BirdWings from './formSectorOne/BirdWings.svelte';
	import BirdOther from './formSectorOne/BirdOther.svelte';
	import Gutted from './formSectorOne/Gutted.svelte';
	import ObservationSectorOne from './formSectorOne/ObservationSectorOne.svelte';

	const closeForm = () => goto('/private/');

	async function onFormSubmit() {
		try {
			const response = await fetch('/private/eviscerado/endpoints/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify($sectorOneStore)
			});
			if (!response.ok) {
				throw new Error('Error al enviar los datos');
			}
			closeForm();
			sectorOneStore.set({
				fecha: '',
				productor: '',
				observaciones_aves: '',
				pollos_chicos: false,
				pollos_medianos: false,
				pollos_grandes: false,
				pollos_desparejos: false,
				buches: 0,
				buches_chicos: false,
				buches_medianos: false,
				buches_grandes: false,
				aves_rotas: 0,
				alas_dislocadas_hematomas_recientes: 0,
				alas_dislocadas_hematomas_viejos: 0,
				alas_dislocadas_sin_hematomas: 0,
				alas_fracturadas_hematomas_recientes: 0,
				alas_fracturadas_hematomas_viejos: 0,
				alas_fracturadas_sin_hematomas: 0,
				alas_puntas_fracturadas: 0,
				miopatias: 0,
				dermatitis: 0,
				dermatitis_leve: false,
				dermatitis_moderada: false,
				dermatitis_severa: false,
				traqueas: 0,
				garras_lindas: false,
				garras_regulares: false,
				garras_feas: false,
				observaciones_garras: '',
				cogotes: 0,
				pulmones: 0,
				cloacas: 0,
				patas_fracturadas: 0,
				sangre: false,
				observaciones_generales: ''
			});
		} catch (error) {
			console.error('Error:', error);
			alert('Error al enviar los datos');
		}
	}
	
</script>

<form on:submit|preventDefault={onFormSubmit} class="flex flex-col lg:flex-row p-2">
	<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
		<BasicInfo {sectorOneStore} />
	</div>
	<div class="divider lg:divider-horizontal"></div>
	<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
		<BirdSizes {sectorOneStore} />
		<BirdCrop {sectorOneStore} />
		<BirdWings {sectorOneStore} />
		<BirdDermatitis {sectorOneStore} />
		<BirdOther {sectorOneStore} />
	</div>
	<div class="divider lg:divider-horizontal"></div>
	<BirdPaw {sectorOneStore} />
	<div class="divider lg:divider-horizontal"></div>
	<Gutted {sectorOneStore} />

	<div class="divider lg:divider-horizontal"></div>
	<div class="card bg-base-100 rounded-box h-fit grid flex-grow place-items-center">
		<ObservationSectorOne {sectorOneStore} />
		<div class="divider lg:divider-horizontal"></div>
		<div class="m-2 md:m-0 flex space-x-1">
			<button type="button" class="btn btn-error" on:click={closeForm}> Cerrar </button>
			<button type="submit" class="btn flex-1 btn-success" disabled={!$sectorOneStore.productor}>
				Guardar
			</button>
		</div>
	</div>
</form>
