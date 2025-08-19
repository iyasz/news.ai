<script>
    import MediumTitle from "../shared/MediumTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";

</script>

<div class="grid grid-cols-12 gap-4 mt-8 overflow-auto">
    {#each Array(4) as _}
    <a href="/" class="lg:col-span-3 col-span-6 flex items-center gap-4 relative overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1674976177833-bf458c892064?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail" loading="lazy" class="md:w-[80px] w-full md:h-[65px] h-[100px] shrink-0 object-cover bg-center" />
        <div class="md:block hidden">
            <MediumTitle></MediumTitle>
            <SmallTitle></SmallTitle>
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-60 p-4 md:hidden flex flex-col justify-end text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <MediumTitle></MediumTitle>
            <SmallTitle></SmallTitle>
        </div>

    </a>
    {/each}
</div>