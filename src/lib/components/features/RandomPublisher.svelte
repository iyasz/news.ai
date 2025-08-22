<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import LargeTitle from "../shared/LargeTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.webp"
    import { formatDate } from "$lib/utils/formatDate";
	import Thumbnail from "../shared/Thumbnail.svelte";
    import TopRightArrow from "$lib/assets/svg/TopRightArrow.svg"
    
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
                        <img src={TopRightArrow} alt="top right arrow icon">
                    </a>
                </div>
                <Thumbnail src={data.thumbnail} styleClass="md:w-[450px] w-[140px] md:h-[250px] h-[140px] shrink-0" />
            </div>
            {/each}
        </div>

        <div class="lg:col-span-3 lg:block hidden h-full">
            <div class="border-l border-slate-300 ps-4 h-full">
                <Thumbnail src={story.thumbnail} styleClass="w-full h-[150px]" />
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