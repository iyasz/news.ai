<script>
    import LargeTitle from "../shared/LargeTitle.svelte";
	import SectionTitle from "../shared/SectionTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.png"
    import { formatDate } from "$lib/utils/formatDate";

    export let datas = [];
    export let onLoadMore;
    export let newsLength;

</script>
<div class="">
    <SectionTitle>Explore The News</SectionTitle>

    <div class="flex flex-wrap justify-between mt-5 gap-y-5">
        {#each datas as data}
        <a href="{data.url}" class="w-[47%] md:w-[23%]">
            <div class="w-full md:h-[240px] h-[160px] bg-gray-200 bg-center bg-cover"  style="background-image: url({data.thumbnail || defaultThumbnail})">
                <img src={data.thumbnail} alt="thumbnail" class="opacity-0 w-full h-full"/>
            </div>
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