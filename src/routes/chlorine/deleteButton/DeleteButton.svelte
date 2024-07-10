<script lang="ts">
	import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte";

    export let id: number;

    const dispatch = createEventDispatcher();
    let isDeleting = false;

    async function handleDelete() {
        isDeleting = true;
        try {
            const responsse = await fetch(`/chlorine/endpoints/delete`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!responsse.ok) {
                throw new Error("Error al eliminar");
            }

            dispatch("delete", id);
        }catch (error) {
            console.error('Error al eliminar', error);
            alert('Error al eliminar');
        } finally {
            isDeleting = false;
        }

        goto('/chlorine');
    }
</script>

<button on:click={handleDelete} class='btn btn-sm btn-error' disabled={isDeleting}>
    {isDeleting ? "Eliminando..." : "Eliminar"}
</button>