<script>
    import LargeTitle from "../shared/LargeTitle.svelte";
	import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.webp"
    import { formatDate } from "$lib/utils/formatDate";
	import Thumbnail from "../shared/Thumbnail.svelte";

    export let datas = [];
    export let onLoadMore;
    export let newsLength;

</script>
<div class="">
    <SectionTitle>Explore The News</SectionTitle>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        {#each datas as data}
            <a href="{data.url}">
            <Thumbnail src={data.thumbnail} styleClass="w-full md:h-[240px] h-[160px]" />
            <div class="mt-4">
                <LargeTitle>{data.title}</LargeTitle>
                <SmallTitle>{formatDate(data.published_at)}</SmallTitle>
            </div>
            </a>
        {/each}
    </div>
    {#if datas.length < newsLength}
    <div class="flex justify-center mt-10">
        <button class="bg-indigo-600 text-white px-5 py-2 cursor-pointer text-sm" on:click={onLoadMore}>Load More</button>
    </div>
    {/if}
</div>