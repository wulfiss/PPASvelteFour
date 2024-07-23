<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import EvisceradoForm from './forms/EvisceradoForm.svelte';
	import IntermediaForm from './forms/IntermediaForm.svelte';
	import GarrasFrom from './forms/garrasFrom.svelte';

	export let flag: any = null;

	function closeModal() {
		flag = false;
	}
</script>

<!-- <button class="btn fixed bottom-4 right-4" on:click={() =>my_modal_1.showModal()}>Agregar medición</button> -->
{#if flag}
	<dialog id="my_modal_2" class="modal" open>
		<div class="modal-box">
			<div class="modal-action flex justify-center mt-0">
				<div role="tablist" class="tabs tabs-bordered">
					<input
						type="radio"
						name="my_tabs_2"
						role="tab"
						class="tab"
						aria-label="Intermedia"
						checked="checked"
					/>
					<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
						<IntermediaForm />
					</div>

					<input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Eviscerado" />
					<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
						<EvisceradoForm />
					</div>
					<input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Garras" />
					<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
						<GarrasFrom />
					</div>
				</div>
			</div>
			<button class="btn btn-sm btn-circle btn-error right-5 top-3 absolute" on:click={closeModal}
				>✕</button
			>
		</div>
	</dialog>
{/if}
