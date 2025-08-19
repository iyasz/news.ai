
<script lang="ts">
    import MainLogo from '$lib/assets/logo.png'
    import { onMount } from "svelte";

    let now = new Date();

    onMount(() => {
        const timer = setInterval(() => {
            now = new Date();
        }, 1000);

        return () => clearInterval(timer);
    });
</script>


<nav class="w-full h-[60px] mb-10">
    <div class="py-4 flex gap-5 items-center justify-between">
        <div class="navbar-brand">
            <img src="{MainLogo}" alt="Brand logo" width="140px" />
        </div>
        <div class="flex items-center gap-7">
            <div class="">
                <button class="cursor-pointer text-white bg-indigo-500 p-1.5 rounded-full" aria-label="search" title="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                </button>
            </div>
            <p class="opacity-25 text-sm md:block hidden">|</p>
            <div class="md:block hidden">
                <p class="text-sm text-slate-700">{now.toDateString()}</p>
                <p class="text-xs text-slate-500">{now.toLocaleTimeString([], {hour12: false})}</p>
            </div>
        </div>
    </div>
</nav>