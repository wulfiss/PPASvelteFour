<script lang="ts">
    export let data;

    $: ({ supabase } = data);

    $: logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.error('Error logging out:', error.message);
    }

</script>

<header>
    <nav>
        <a href="/">Home</a>
    </nav>
    <button on:click={logout}>Logout</button>
</header>
<main>
    <slot />
</main>