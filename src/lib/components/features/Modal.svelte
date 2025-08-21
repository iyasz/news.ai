<script>
    import { isModalOpen, closeModal } from "$lib/stores/modal";
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    export let searchResults = [];
    const dispatch = createEventDispatcher();

    function onInput(e) {
        dispatch("search", e.target.value); 
    }

</script>

{#if $isModalOpen}
 <div id="modal" class="fixed inset-0 z-50 block" >
        <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" transition:fade></div>
        
        <div class="relative flex items-center justify-center min-h-screen p-4" transition:fade>
            <div class="bg-white shadow-2xl rounded-xl w-full max-w-2xl max-h-[80vh] flex flex-col">

                <div class="border-b border-gray-200">
                    <div class="relative">
                        <input 
                            type="text" 
                            id="searchInput" 
                            placeholder="Search news .." 
                            class="w-full px-12 py-4 focus:outline-none focus:border-transparent text-slate-600 transition-all text-sm"
                            autocomplete="off"
                            on:input={onInput} />
                        <div class="absolute inset-y-0 left-0 ps-5 flex items-center pointer-events-none">
                            <svg width="13" height="13" class="DocSearch-Search-Icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>

                        <button on:click={() => {closeModal(); searchResults=[]}} id="closeModal" aria-label="esc" class="text-gray-400 hover:text-gray-600 absolute cursor-pointer right-0 pe-4 inset-y-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                    </div>
                </div>

                <div class="flex-1 overflow-y-auto max-h-96">
                    <div id="searchResults" class="p-4">

                        {#if searchResults.length > 0}
                            {#each searchResults as item}
                                <a href="{item.url}" class="block search-item p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-200">
                                    <h3 class="font-medium text-gray-900 line-clamp-1">{item.title}</h3>
                                    <p class="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                                </a>
                            {/each}
                        {:else}
                            <!--<div class="space-y-3">
                                <div class="search-item p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-200">
                                    <h3 class="font-medium text-gray-900">JavaScript Fundamentals</h3>
                                    <p class="text-sm text-gray-600">Learn the basics of JavaScript programming</p>
                                </div>
                                <div class="search-item p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-200">
                                    <h3 class="font-medium text-gray-900">React Components</h3>
                                    <p class="text-sm text-gray-600">Building reusable UI components with React</p>
                                </div>
                            </div> -->
                            <div id="noResults" class="block text-center py-8">
                                <p class="text-gray-500">No items found</p>
                            </div>
                        {/if}
                        
                    </div>
                </div>

                <div class="py-5 border-t border-slate-200 ">
                    <div class="flex justify-end space-x-3"></div>
                </div>
                
            </div>
        </div>
    </div>
    {/if}