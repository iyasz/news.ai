<script>
    import MediumTitle from "../shared/MediumTitle.svelte";
    import SmallTitle from "../shared/SmallTitle.svelte";
    import defaultThumbnail from "$lib/assets/default_thumbnail.png"
    import { formatDate } from "$lib/utils/formatDate";
	import Thumbnail from "../shared/Thumbnail.svelte";

    export let datas = [];

</script>

<div class="grid grid-cols-12 gap-4 mt-8 overflow-auto">
    {#each datas as data}
    <a href="{data.url}" class="lg:col-span-3 col-span-6 flex items-center gap-4 relative overflow-hidden group">
        <Thumbnail src={data.thumbnail} styleClass="md:w-[80px] w-full md:h-[65px] h-[100px] shrink-0" />
        <div class="md:block hidden">
            <MediumTitle>{data.title}</MediumTitle>
            <SmallTitle>{formatDate(data.published_at)}</SmallTitle>
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-60 p-4 md:hidden flex flex-col justify-end text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <MediumTitle>{data.title}</MediumTitle>
            <SmallTitle>{formatDate(data.published_at)}</SmallTitle>
        </div>

    </a>
    {/each}
</div>