<script>
  // export let error;
  export let onRetry;
</script>

<div class="text-center">
  <div class="text-red-600 font-semibold mt-[20%] text-xl mb-4">Failed to load news</div>
  <p class="text-gray-600 mb-4">Please try again or wait until tommorow</p>
  <button 
    on:click={onRetry}
    class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 cursor-pointer">
    Try Again
  </button>
</div>
