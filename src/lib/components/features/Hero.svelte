<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import MediumTitle from "../shared/MediumTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import HeroBottom from "./HeroBottom.svelte";

</script>
<div class="grid grid-cols-12 gap-4">
    <div class="lg:col-span-8 col-span-12">
        <div class="md:flex block gap-3 bg-slate-50 ">
            <img src="https://images.unsplash.com/photo-1674976177833-bf458c892064?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail" loading="lazy" class="md:w-[50%] w-full md:h-[430px] h-[350px] object-cover bg-center" />
            <div class="p-4 flex flex-col">
                <div>
                    <p class="text-red-600 font-semibold mb-4">News</p>
                    <a href="/" class="text-xl hover:underline line-clamp-4 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nobis odit dignissimos vitae expedita.</a>
                    <DescriptionTitle lineClamp="4"></DescriptionTitle>
                </div>
                <div class="md:mt-auto mt-5 mb-3">
                    <SmallTitle></SmallTitle>
                </div>

            </div>
        </div>
    </div>

    <div class="col-span-4 lg:block hidden">
        <SectionTitle>Picks for you</SectionTitle>
        <div class="flex flex-col justify-evenly h-full">
            {#each Array(3) as _}
            <a href="/" class="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1674976177833-bf458c892064?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumbnail" loading="lazy" class="w-[170px] h-[80px] shrink-0 object-cover bg-center" />
                <div class="">
                    <MediumTitle></MediumTitle>
                    <SmallTitle></SmallTitle>
                </div>
            </a>
            <hr class="opacity-[0.1]">
            {/each}
 
        </div>

        
    </div>
</div>

<HeroBottom/>