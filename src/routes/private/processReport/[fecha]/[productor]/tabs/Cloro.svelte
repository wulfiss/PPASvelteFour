<script lang="ts">
    export let data;

    $: concentracionClass = (concentracion: number) => {
		if (concentracion >= 0.3 && concentracion <= 0.8) {
			return 'badge badge-lg badge-success gap-2';
		} else if (concentracion > 0.8 && concentracion <= 1) {
			return 'badge badge-lg badge-warning gap-2';
		} else if (concentracion < 0.3 && concentracion >= 0.2) {
			return 'badge badge-lg badge-warning gap-2';
		} else {
			return 'badge badge-lg badge-error gap-2';
		}
	};

    console.log(data);
</script>
<div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
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
                <div class={concentracionClass(measurement.concentracion)}>
                    {measurement.concentracion.toFixed(2)}
                </div>
            </td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>