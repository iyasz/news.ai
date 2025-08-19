<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import LargeTitle from "../shared/LargeTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";

</script>
<div class="">
    <SectionTitle>Latest News</SectionTitle>

    <div class="flex gap-6 mt-5 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
        {#each Array(3) as _}
        <a href="/" class="shrink-0 w-[calc(100%-2rem)] sm:w-1/2 md:w-auto">
            <p></p>
            <img src="https://images.unsplash.com/photo-1674976177833-bf458c892064?q=80&w=774&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by-1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="thumbnail" loading="lazy" class="w-full h-[240px] object-cover bg-center" />
            <div class="mt-4">
                <SmallTitle></SmallTitle>
                <LargeTitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nobis odit dignissimos vitae expedita</LargeTitle>
                <DescriptionTitle lineClamp="2"></DescriptionTitle>

            </div>
        </a>
        {/each}
    </div>
</div>