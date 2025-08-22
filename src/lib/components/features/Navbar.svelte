
<script>
    import MainLogo from '$lib/assets/logo.png'
    import { onMount } from "svelte";
    import { openModal } from "$lib/stores/modal";
    import Search from "$lib/assets/svg/Search.svg"

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
            <a href="/">
                <img src="{MainLogo}" alt="Brand logo" width="140px" />
            </a>
        </div>
        <div class="flex items-center gap-7">
            <div class="">
                <button class="cursor-pointer  bg-indigo-500 p-1.5 rounded-full" on:click={openModal} aria-label="search" title="search">
                    <img src="{Search}" alt="search icon">
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