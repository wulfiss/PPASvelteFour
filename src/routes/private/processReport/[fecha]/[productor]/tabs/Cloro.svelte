<script lang="ts">
    import chlorineConcentrationBadge from "$lib/utils/chlorineConcentrationBadge";
    
    export let data;

</script>
<div class="overflow-x-auto">
    <table class="table table-zebra">
      <thead>
			<tr>
				<th class="text-center">Fecha</th>
				<th class="text-center">Hora</th>
				<th class="text-center">Sector</th>
				<th class="text-center">Grifo</th>
				<th class="text-center">Concentración<br />(ppm)</th>
			</tr>
      </thead>
      <tbody>
        {#each data as measurement, i}
        <tr>
            <th class="text-center">{measurement.fecha}</th>
            <td class="text-center">{measurement.hora}</td>
            <td class="text-center">{measurement.sector}</td>
            <td class="text-center">{measurement.grifo}</td>
            <td class="text-center">
                <div class={chlorineConcentrationBadge(measurement.concentracion)}>
                    {measurement.concentracion.toFixed(2)}
                </div>
            </td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>