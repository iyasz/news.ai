<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import MediumTitle from "../shared/MediumTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.png"
    import { formatDate } from "$lib/utils/formatDate";
	import Thumbnail from "../shared/Thumbnail.svelte";

    export let mainNews = {};
    export let picksNews = [];

</script>
<div class="grid grid-cols-12 gap-4">
    <div class="lg:col-span-8 col-span-12">
        <div class="md:flex block gap-3 bg-slate-50 ">
            <Thumbnail src={mainNews.thumbnail} styleClass="md:w-[50%] w-full md:h-[430px] h-[350px]" />
            <div class="p-4 flex flex-col">
                <div>
                    <p class="text-red-600 font-semibold mb-4">{mainNews.source}</p>
                    <a href="{mainNews.url}" class="text-xl hover:underline line-clamp-4 font-semibold">{mainNews.title}</a>
                    <DescriptionTitle lineClamp="4">{mainNews.description}</DescriptionTitle>
                </div>
                <div class="md:mt-auto mt-5 mb-3">
                    <SmallTitle>{formatDate(mainNews.published_at)}</SmallTitle>
                </div>

            </div>
        </div>
    </div>

    <div class="col-span-4 lg:block hidden">
        <SectionTitle>Picks for you</SectionTitle>
        <div class="flex flex-col justify-evenly h-full">
            {#each picksNews as data}
            <a href="{data.url}" class="flex items-center gap-3">
                <Thumbnail src={data.thumbnail} styleClass="w-[170px] h-[80px] shrink-0" />
                <div>
                    <MediumTitle>{data.title}</MediumTitle>
                    <SmallTitle>{formatDate(data.published_at)}</SmallTitle>
                </div>
            </a>
            <hr class="opacity-[0.1]">
            {/each}
 
        </div>

        
    </div>
</div>
