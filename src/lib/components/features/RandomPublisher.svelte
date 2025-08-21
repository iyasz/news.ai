<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import LargeTitle from "../shared/LargeTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.png"
    import { formatDate } from "$lib/utils/formatDate";
    
    export let datas = [];
    export let story = {}; 

</script>
<div class="">
    <SectionTitle>News by Publisher <span class="ms-2 text-indigo-600 text-sm">{story.source}</span></SectionTitle>

    <div class="mt-5 grid grid-cols-12 gap-4 items-stretch">
        <div class="lg:col-span-9 col-span-12 ">
            {#each datas as data}
            <div class="flex  gap-6 mb-5">
                <div class="description">
                    <SmallTitle>{formatDate(data.published_at)}</SmallTitle>
                    <LargeTitle type="a" href="{data.url}">{data.title}</LargeTitle>
                    <DescriptionTitle lineClamp="2">{data.description}</DescriptionTitle>

                    <a href="{data.url}" class="items-center gap-2 hover:underline md:text-sm text-xs mt-2 md:flex hidden">
                        See more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </a>
                </div>
                <img src="{data.thumbnail}" on:error={(e) => e.currentTarget.src = defaultThumbnail}  alt="thumbnail" loading="lazy" class="md:w-[450px] w-[140px] md:h-[250px] h-[140px] shrink-0 object-cover bg-center shadow-sm" />
            </div>
            {/each}
        </div>

        <div class="lg:col-span-3 lg:block hidden h-full">
            <div class="border-l border-slate-300 ps-4 h-full">
                <img src="{story.thumbnail}" on:error={(e) => e.currentTarget.src = defaultThumbnail}  alt="thumbnail" loading="lazy" class="w-full h-[150px] object-cover bg-center shadow-sm" />
                <div class="mt-5">
                    <LargeTitle type="a" href="{story.url}">{story.title}</LargeTitle>
                    <DescriptionTitle lineClamp="4">{story.description}</DescriptionTitle>
                    <br>
                    <SmallTitle>{formatDate(story.published_at)}</SmallTitle>
                </div>
            </div>
        </div>
    </div>
</div>