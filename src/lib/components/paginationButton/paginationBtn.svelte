<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let totalItems: number = 0;
    export let itemsPerPage: number = 10;
    export let currentPage: number = 1;

    const dispatch = createEventDispatcher<{pageChange: {page: number}}>();

    $: totalPages = Math.ceil(totalItems / itemsPerPage);
    $: visiblePages = getVisiblePages(currentPage, totalPages);

    function getVisiblePages(currentPage: number, total: number):(number | string)[] {
        if(total <= 7) return [...Array(total)].map((_, i) => i + 1);
        
        if(currentPage < 5) return [1, 2, 3, 4, 5, '...', total];
        if(currentPage > total - 4) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
    
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', total];
    }

    function changePage(page: string | number): void {
        if (typeof page === 'number' && page !== currentPage){
            currentPage = page;
            dispatch('pageChange', { page });
        }
    }
</script>

<div class="btn-grup">
    {#each visiblePages as page}
        <button
            class="btn btn-sm {page === currentPage ? 'btn-active' : ''}"
            on:click={() => changePage(page)}
            disabled={page === '...'}
        >
            {page}
        </button>
    {/each}
</div>