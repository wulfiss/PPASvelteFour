<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	
	$: data = $page.data;

	console.log(data);

	const navigateToDetails = (fecha: any, productor: any) => {
		goto(`/private/processReport/${fecha}/${productor}`);
	};
</script>

<div class="overflow-x-auto w-full flex justify-center">
	<table class="table table-zebra md:w-4/5">
	  <thead>
		<tr>
		  <th>Fecha</th>
		  <th>Productor</th>
		  <th></th>
		</tr>
	  </thead>
	  <tbody>
	{#each data.Sector_One as date, i}
	<tr>
		<td>{date.fecha}</td>
		<td>{date.productor}</td>
	  <th>
		  <button class="btn btn-ghost btn-xs" on:click={() => navigateToDetails(date.fecha, date.productor)}>details</button>
	  </th>
	  </tr>
	{/each}
	</tbody>
	</table>
  </div>