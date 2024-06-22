<script>
    import { goto } from '$app/navigation';


    function handleClick() {
        goto('/chlorine');
    }

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button class="btn btn-active btn-primary" on:click={handleClick}>Cloro</button>