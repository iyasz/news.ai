<script>
    import LargeTitle from "../shared/LargeTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";

</script>
<div class="">
    <h1 class="text-2xl font-bold text-slate-700">All Articles</h1>

    <div class="flex flex-wrap justify-between mt-5 gap-y-5">
        {#each Array(4) as _}
        <a href="/" class="w-[47%] md:w-[23%]">
            <p></p>
            <img src="https://images.unsplash.com/photo-1674976177833-bf458c892064?q=80&w=774&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by-1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="thumbnail" loading="lazy" class="w-full md:h-[240px] h-[160px] object-cover bg-center" />
            <div class="mt-4">
                <LargeTitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nobis odit dignissimos vitae expedita</LargeTitle>
                <SmallTitle></SmallTitle>
            </div>
        </a>
        {/each}
    </div>
    <div class="flex justify-center mt-10">
        <button class="bg-indigo-600 text-white px-5 py-2 cursor-pointer text-sm">Load More</button>
    </div>
</div>