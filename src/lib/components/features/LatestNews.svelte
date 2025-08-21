<script>
    import DescriptionTitle from "../shared/DescriptionTitle.svelte";
    import LargeTitle from "../shared/LargeTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.png"
    import { formatDate } from "$lib/utils/formatDate";

    export let datas = [];

</script>
<div class="">
    <SectionTitle>Latest News</SectionTitle>

    <div class="flex gap-6 mt-5 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
        {#each datas as data}
        <a href="{data.url}" class="shrink-0 w-[calc(100%-2rem)] sm:w-1/2 md:w-auto">
            <img src="{data.thumbnail}" on:error={(e) => e.currentTarget.src = defaultThumbnail} alt="thumbnail" loading="lazy" class="w-full h-[240px] object-cover bg-center shadow-sm" />
            <div class="mt-4">
                <SmallTitle>{formatDate(data.published_at)}</SmallTitle>
                <LargeTitle>{data.title}</LargeTitle>
                <DescriptionTitle lineClamp="2">{data.description}</DescriptionTitle>

            </div>
        </a>
        {/each}
    </div>
</div>