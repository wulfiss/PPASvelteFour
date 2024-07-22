<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import EvisceradoForm from './forms/EvisceradoForm.svelte';

	export let flag: any = null;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}
</script>

<!-- <button class="btn fixed bottom-4 right-4" on:click={() =>my_modal_1.showModal()}>Agregar medición</button> -->
{#if flag}
	<dialog id="modal" class="modal" open>
		<div class="modal-box">
			<div class="modal-action flex justify-center mt-0">
				<div role="tablist" class="tabs tabs-lifted">
					<input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
					<div
						role="tabpanel"
						class="tab-content bg-base-100 border-base-300 rounded-box p-6"
					></div>

					<input
						type="radio"
						name="my_tabs_2"
						role="tab"
						class="tab"
						aria-label="Eviscerado"
						checked="checked"
					/>
					<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
						<EvisceradoForm />
					</div>

					<input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
					<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
						Tab content 3
					</div>
				</div>
			</div>
		</div>
	</dialog>
{/if}
