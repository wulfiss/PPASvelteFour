<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	/* export let data; */
	$: data = $page.data;

	$: console.log(data);

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('es-ES', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-6">Datos de Aves de Corral Combinados</h1>

	{#if data.combinedPoultryData && data.combinedPoultryData.length > 0}
		<div class="space-y-6">
			{#each data.combinedPoultryData as dayData}
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{formatDate(dayData.fecha)}</h2>
						{#each dayData.entries as entry}
							<div class="collapse collapse-arrow bg-base-200">
								<input type="radio" name="my-accordion-2" checked="checked" />
								<div class="collapse-title text-xl font-medium">
									{entry.intermedia_granja}
								</div>
								<div class="collapse-content">
									<div class="overflow-x-auto">
										<table class="table table-zebra w-full">
											<thead>
												<tr>
													<th>Categoría</th>
													<th>Datos</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Eviscerado</td>
													<td>
														Cogotes: {entry.cogotes}
														<br />Pulmones: {entry.pulmones}
														<br />Cloacas: {entry.cloacas}
														<br />Patas Fracturadas: {entry.patasFracturadas}
														<br />Sangre en tronquitos: {entry.sangre ? 'Sí' : 'No'}
														<br />Observaciones: {entry.eviscerado_observaciones}
													</td>
												</tr>

												<tr>
													<td>Garras</td>
													<td>
														Lindas: {entry.garras_lindas ? 'Sí' : 'No'}
														<br />Regulares: {entry.garras_regulares ? 'Sí' : 'No'}
														<br />Feas: {entry.garras_feas ? 'Sí' : 'No'}
														<br />Observaciones: {entry.garras_observaciones}
													</td>
												</tr>
												<tr>
													<td>Intermedia</td>
													<td>
														Tamaño de Pollos <br />Chicos: {entry.pollos_chicos ? 'Sí' : 'No'},
														Medianos: {entry.pollos_medianos ? 'Sí' : 'No'}, Grandes: {entry.pollos_grandes
															? 'Sí'
															: 'No'}, Desparejos: {entry.pollos_desparejos ? 'Sí' : 'No'}
														<br />Buches: {entry.buches}, Chicos: {entry.buches_pequenos
															? 'Sí'
															: 'No'}, Medianos: {entry.buches_medianos ? 'Sí' : 'No'}, Grandes: {entry.buches_grandes
															? 'Sí'
															: 'No'}
														<br />Pollos Rotos: {entry.pollos_rotos}
														<br />Alas Dislocadas <br />Con Hematomas Recientes: {entry.dislocadas_hematomas_recientes},
														Con Hematomas Viejos: {entry.dislocadas_hematomas_viejos}, Con Sin
														Hematomas: {entry.dislocadas_sin_hematomas}
														<br />Alas Fracturadas<br /> Con Hematomas Recientes: {entry.fracturadas_hematomas_recientes},
														Con Hematomas Viejos: {entry.fracturadas_hematomas_viejos}, Con Sin
														Hematomas: {entry.fracturadas_sin_hematomas}, Puntas de Alas: {entry.puntas_quebradas}
														<br />Dermatitis: {entry.dermatitis}<br /> Leve: {entry.dermatitis_leve
															? 'Sí'
															: 'No'}, Moderada: {entry.dermatitis_moderada ? 'Sí' : 'No'}, Severa: {entry.dermatitis_severa
															? 'Sí'
															: 'No'}
														<br />Traqueas: {entry.traqueas}
														<br />Miopatia: {entry.miopatias}
														<br />Observaciones: {entry.intermedia_observaciones}
													</td>
												</tr>
												<tr>
													<td>Cloro Libre</td>
													<td>
														Hora: {entry.cloro_hora}, Sector: {entry.cloro_sector}, Grifo: {entry.cloro_grifo},
														Concentración: {entry.cloro_concentracion}
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="alert alert-info shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-current flex-shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path></svg
				>
				<span>No hay datos disponibles para mostrar.</span>
			</div>
		</div>
	{/if}
</div>
