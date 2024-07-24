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
	<h1 class="text-3xl font-bold mb-6">Faenas por fechas</h1>
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
													<td class="font-bold">Eviscerado</td>
													<td>
														<span class="font-semibold">Cogotes: </span>{entry.cogotes}
														<br /><span class="font-semibold">Pulmones: </span>{entry.pulmones}
														<br /><span class="font-semibold">Cloacas: </span>{entry.cloacas}
														<br /><span class="font-semibold"
															>Patas Fracturadas:
														</span>{entry.patasFracturadas}
														<br /><span class="font-semibold"
															>Sangre en tronquitos:
														</span>{entry.sangre ? 'Sí' : 'No'}
														<br /><span class="font-semibold"
															>Observaciones:
														</span>{entry.eviscerado_observaciones}
													</td>
												</tr>

												<tr>
													<td class="font-bold">Garras</td>
													<td>
														<span class="font-semibold"> Calidad: </span>
														<span class="">
															{#if entry.garras_lindas}
																Lindas
															{/if}
															{#if entry.garras_regulares}
																Regulares
															{/if}
															{#if entry.garras_feas}
																Feas
															{/if}
														</span>
														<br />
														<span class="font-semibold"> Observaciones: </span>
														{entry.garras_observaciones}
													</td>
												</tr>
												<tr>
													<td class="font-bold">Intermedia</td>
													<td>
														<span class="font-semibold">Tamaño de Pollos:</span>
														<span class="">
															{#if entry.pollos_chicos}
																Pequeños
															{/if}
															{#if entry.pollos_medianos}
																Medianos
															{/if}
															{#if entry.pollos_grandes}
																Grandes
															{/if}
															{#if entry.pollos_desparejos}
																- Desparejos
															{/if}
														</span>
														<br />
														<span class="font-semibold">Buches:</span>
														{entry.buches}
														<span class=""
															>(
															{#if entry.buches_pequenos}
																Chicos
															{/if}
															{#if entry.buches_medianos}
																Medianos
															{/if}
															{#if entry.buches_grandes}
																Grandes
															{/if})
														</span>
														<br /><span class="font-semibold">Pollos Rotos:</span>
														{entry.pollos_rotos}
														<p class="font-semibold">Alas Dislocadas</p>
														<p class="m-3">
															Con Hematomas Recientes: {entry.dislocadas_hematomas_recientes}
															<br />Con Hematomas Viejos: {entry.dislocadas_hematomas_viejos}
															<br />Sin Hematomas: {entry.dislocadas_sin_hematomas}
														</p>
														<p class="font-semibold">Alas Fracturadas</p>
														<p class="m-3">
															Con Hematomas Recientes: {entry.fracturadas_hematomas_recientes}
															<br />Con Hematomas Viejos: {entry.fracturadas_hematomas_viejos},
															<br />Sin Hematomas: {entry.fracturadas_sin_hematomas}
															<br />Puntas de Alas: {entry.puntas_quebradas}
														</p>
														<br /><span class="font-semibold">Dermatitis:</span>
														{entry.dermatitis}
														<span class=""
															>(
															{#if entry.dermatitis_leve}
																Leve
															{/if}
															{#if entry.dermatitis_moderada}
																Moderada
															{/if}
															{#if entry.dermatitis_severa}
																Severa
															{/if})
														</span>
														<br />
														<span class="font-semibold">Traqueas:</span>
														{entry.traqueas}
														<br /><span class="font-semibold">Miopatia:</span>
														{entry.miopatias}
														<br /><span class="font-semibold">Observaciones:</span>
														{entry.intermedia_observaciones}
													</td>
												</tr>
												<tr>
													<td class="font-bold">Cloro Libre</td>
													<td> VER </td>
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
