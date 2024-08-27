<script lang="ts">
    
    export let data;

</script>
<div class="overflow-x-auto">
    <table class="table table-zebra">
      <thead>
			<tr>
				<th class="text-center">Fecha</th>
				<th class="text-center">Observaciones</th>
			</tr>
      </thead>
      <tbody>
        {#each data as Observaciones, i}
        <tr>
            <th class="text-center">{Observaciones.fecha}</th>
            <td class="text-center w-3/4">{Observaciones.observaciones_generales}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>