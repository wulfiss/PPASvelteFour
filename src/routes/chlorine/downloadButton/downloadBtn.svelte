<script lang="ts">

    function downloadXLSX() {
        window.location.href ='/chlorine/endpoints/download';
	}

</script>

<button class="btn fixed bottom-4 right-4" on:click={() => downloadXLSX()} >
    Descarga Excel
</button>