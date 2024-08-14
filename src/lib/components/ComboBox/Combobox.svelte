<script>
    import { createEventDispatcher } from 'svelte';
  
    export let options = [];
    export let placeholder = 'Select an option';
    export let selectedValue = '';
    export let classList = '';
  
    let isOpen = false;
    let filteredOptions = options;
    let inputValue = '';
  
    const dispatch = createEventDispatcher();
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  
    function selectOption(option) {
      selectedValue = option;
      inputValue = option;
      isOpen = false;
      dispatch('select', { selectedValue });
    }
  
    function filterOptions(event) {
      inputValue = event.target.value;
      filteredOptions = options.filter(option =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  </script>
  
  <div class="relative {classList}">
    <input
      type="text"
      class="input input-bordered w-full"
      {placeholder}
      bind:value={inputValue}
      on:input={filterOptions}
      on:focus={() => (isOpen = true)}
    />
    <button
      type="button"
      class="absolute inset-y-0 right-0 flex items-center px-2"
      on:click={toggleDropdown}
    >
      <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    {#if isOpen}
      <ul
        class="absolute top-12 z-10 w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      >
        {#each filteredOptions as option}
          <li
            class="cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
            on:click={() => selectOption(option)}
          >
            {option}
          </li>
        {/each}
      </ul>
    {/if}
  </div>