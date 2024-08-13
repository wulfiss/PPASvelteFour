<script lang="ts">
	import { goto } from "$app/navigation";

	export let searchTerm: string = "";
    export let page = 1;
    export let pageSize = 10;
    export let totalItems = 0;

    $: totalPages = Math.ceil(totalItems / pageSize);

    function changePage(newPage: number) {
		goto(`?search=${encodeURIComponent(searchTerm)}&page=${newPage}`);
	}

</script>

<div class="join flex flex-row justify-center mt-3">
	<button class="join-item btn" disabled={page === 1} on:click={() => changePage(page - 1)}>«</button>
	{#each Array(totalPages) as _, i}
	  {#if i + 1 === 1 || i + 1 === totalPages || (i + 1 >= page - 1 && i + 1 <= page + 1)}
		<button class="join-item btn" class:btn-active={page === i + 1} on:click={() => changePage(i + 1)}>{i + 1}</button>
	  {:else if (i === 1 || i === totalPages - 2) && (page > 3 && page < totalPages - 2)}
		<button class="join-item btn btn-disabled">...</button>
	  {/if}
	{/each}
	<button class="join-item btn" disabled={page === totalPages} on:click={() => changePage(page + 1)}>»</button>
</div>