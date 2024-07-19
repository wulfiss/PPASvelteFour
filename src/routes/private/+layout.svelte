<script>
	import { goto } from '$app/navigation';

	export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
		goto('/');
	};
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
				>
					<li><a href="/private/">Inicio</a></li>
					<li><a href="/private/chlorine">Cloro</a></li>
					<li><a href="/" on:click={logout}>Cerrar sesion</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="btn btn-ghost text-xl" href="/private">Gestion de Calidad - PPA</a>
		</div>
		<div class="navbar-end"></div>
	</div>
</header>
<main>
	<slot />
</main>
<footer class="footer footer-center bg-base-300 text-base-content p-4 mt-5">
	<aside>
		<p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
	</aside>
</footer>
