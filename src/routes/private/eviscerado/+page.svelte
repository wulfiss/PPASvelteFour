<script lang="ts">
	import sectorOneStore from "$lib/stores/sectorOneStore";
    import type { sectorOneData } from "$lib/types";
    
	import BasicInfo from "./formSectorOne/BasicInfo.svelte";
	import BirdSizes from "./formSectorOne/BirdSizes.svelte";

	let date = new Date();
	let today = date.toISOString().slice(0, 10); // YYYY-MM-DD
	let time = date.toLocaleTimeString('en-US', {
		hour12: false, // Ensure 24-hour format
		hour: '2-digit',
		minute: '2-digit'
	});

	async function onFormSubmit() {
		try {
			const response = await fetch('/private/eviscerado/endpoints/allForm', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify($sectorOneStore)
			});
			if (!response.ok) {
				throw new Error('Error al enviar los datos');
			}
			sectorOneStore.set({});
		} catch (error) {
			console.error('Error:', error);
			alert('Error al enviar los datos');
		}
	}
</script>

<BirdSizes {sectorOneStore} />
<BasicInfo {sectorOneStore} />
