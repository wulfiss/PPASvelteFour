<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

    export let datas;

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('es-ES', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<div class="container mx-auto p-4">
		<div class="space-y-6">
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title m-auto">{datas[0].productor}</h2>
						{#each datas as data, i}
							<div class="collapse collapse-arrow bg-base-200 md:w-3/4 m-auto">
								<input type="checkbox" />
								<div class="collapse-title text-xl font-medium">
									Control {i + 1}
								</div>
								<div class="collapse-content">
									<div class="overflow-x-auto">
										
										<div class="divider divider-primary">Intermedia</div>
										<span class="font-semibold">Observaciones de las Aves:</span>
											{data.observaciones_aves}
										<br />
										<span class="font-semibold">Tamaño de Pollos:</span>
										<span class="">
											{#if data.pollos_chicos}
												Pequeños
											{/if}
											{#if data.pollos_medianos}
											  Medianos
											{/if}
											{#if data.pollos_grandes}
												Grandes
											{/if}
											{#if data.pollos_desparejos}
												- Desparejos
											{/if}
											</span>
											<br />
											<span class="font-semibold">Buches:</span>
											{data.buches}
											{#if data.buches}
												<span class=""
													>(
													{#if data.buches_chicos}
														Chicos
													{/if}
													{#if data.buches_medianos}
														Medianos
													{/if}
													{#if data.buches_grandes}
														Grandes
													{/if})
												</span>
											{/if}
											<br />
											<span class="font-semibold">Pollos Rotos:</span>
											{data.aves_rotas}
											<p class="font-semibold">Alas Dislocadas</p>
											<p class="m-3">
												Con Hematomas Recientes: {data.alas_dislocadas_hematomas_recientes}
												<br />Con Hematomas Viejos: {data.alas_dislocadas_hematomas_viejos}
												<br />Sin Hematomas: {data.alas_dislocadas_sin_hematomas}
											</p>
											<p class="font-semibold">Alas Fracturadas</p>
											<p class="m-3">
												Con Hematomas Recientes: {data.alas_fracturadas_hematomas_recientes}
												<br />Con Hematomas Viejos: {data.alas_fracturadas_hematomas_viejos}
												<br />Sin Hematomas: {data.alas_fracturadas_sin_hematomas}
												<br />Puntas de Alas: {data.alas_puntas_fracturadas}
											</p>
											<br /><span class="font-semibold">Dermatitis:</span>
											{data.dermatitis}
											{#if data.dermatitis}
												<span class=""
													>(
													{#if data.dermatitis_leve}
														Leve
													{/if}
													{#if data.dermatitis_moderada}
														Moderada
													{/if}
													{#if data.dermatitis_severa}
														Severa
													{/if})
												</span>
											{/if}
											<br />
											<span class="font-semibold">Traqueas:</span>
											{data.traqueas}
											<br /><span class="font-semibold">Miopatia:</span>
											{data.miopatias}
										
									<div class="divider divider-primary font-bold">Garras</div>
											<span class="font-semibold"> Calidad: </span>
											<span class="">
												{#if data.garras_lindas}
													Lindas
												{/if}
												{#if data.garras_regulares}
													Regulares
												{/if}
												{#if data.garras_feas}
													Feas
												{/if}
											</span>
											<br />
											<span class="font-semibold"> Observaciones: </span>
											{data.observaciones_garras}

											<div class="divider divider-primary font-bold">Eviscerado</div>												
										<span class="font-semibold">Cogotes: </span>{data.cogotes}
										<br /><span class="font-semibold">Pulmones: </span>{data.pulmones}
										<br /><span class="font-semibold">Cloacas: </span>{data.cloacas}
										<br /><span class="font-semibold"
											>Patas Fracturadas:
										</span>{data.patas_fracturadas}
										<br /><span class="font-semibold"
											>Sangre en patas:
										</span>{data.sangre ? 'Sí' : 'No'}
										<br />											
									<div class="divider divider-primary font-bold">Observaciones generales</div>
									<span class="font-semibold"></span>{data.observaciones_generales}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
		</div>
</div>




