<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import LargeTitle from "../shared/LargeTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";

</script>
<div class="">
    <SectionTitle>Articles by Author <span class="ms-2 text-indigo-600 text-sm">Keren</span></SectionTitle>

    <div class="mt-5 grid grid-cols-12 gap-4 items-stretch">
        <div class="lg:col-span-9 col-span-12 ">
            {#each Array(2) as _}
            <div class="flex  gap-6 mb-5">
                <div class="description">
                    <SmallTitle></SmallTitle>
                    <LargeTitle type="a" href="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nobis odit dignissimos vitae expedita</LargeTitle>
                    <DescriptionTitle lineClamp="2"></DescriptionTitle>

                    <a href="/" class="items-center gap-2 hover:underline md:text-sm text-xs mt-2 md:flex hidden">
                        See more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right "><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </a>
                </div>
                <img src="https://images.unsplash.com/photo-1674976177833-bf458c892064?q=80&w=774&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by-1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="thumbnail" loading="lazy" class="md:w-[450px] w-[140px] md:h-[250px] h-[140px] shrink-0 object-cover bg-center" />
            </div>
            {/each}
        </div>

        <div class="lg:col-span-3 lg:block hidden h-full">
            <div class="border-l border-slate-300 ps-4 h-full">
                <img src="https://images.unsplash.com/photo-1674976177833-bf458c892064?q=80&w=774&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by-1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="thumbnail" loading="lazy" class="w-full h-[150px] object-cover bg-center" />
                <div class="mt-5">
                    <LargeTitle type="a" href="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nobis odit dignissimos vitae expedita</LargeTitle>
                    <DescriptionTitle lineClamp="4"></DescriptionTitle>
                    <br>
                    <SmallTitle></SmallTitle>
                </div>
            </div>
        </div>
    </div>
</div>