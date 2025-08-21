<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import MediumTitle from "../shared/MediumTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.png"
    import { formatDate } from "$lib/utils/formatDate";

    export let mainNews = {};
    export let picksNews = [];

</script>
<div class="grid grid-cols-12 gap-4">
    <div class="lg:col-span-8 col-span-12">
        <div class="md:flex block gap-3 bg-slate-50 ">
            <img src="{mainNews.thumbnail}" on:error={(e) => e.currentTarget.src = defaultThumbnail} alt="thumbnail" loading="lazy" class="md:w-[50%] w-full md:h-[430px] h-[350px] object-cover bg-center shadow-sm" />
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
            {#each picksNews as pick}
            <a href="{pick.url}" class="flex items-center gap-3">
                <img src="{pick.thumbnail}" on:error={(e) => e.currentTarget.src = defaultThumbnail} alt="thumbnail" loading="lazy" class="w-[170px] h-[80px] shrink-0 object-cover bg-center shadow-sm" />
                <div>
                    <MediumTitle>{pick.title}</MediumTitle>
                    <SmallTitle>{formatDate(pick.published_at)}</SmallTitle>
                </div>
            </a>
            <hr class="opacity-[0.1]">
            {/each}
 
        </div>

        
    </div>
</div>
