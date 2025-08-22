<script>
    import defaultThumbnail from "$lib/assets/default_thumbnail.webp"
    export let src = "";
    export let styleClass = "";
    export let fetchpriority = "";

    function handleError(e) {
        e.currentTarget.src = defaultThumbnail;
    }
</script>


<img src={src || defaultThumbnail} alt="thumbnail" loading="lazy" on:error={handleError} fetchpriority={fetchpriority} class="{styleClass} bg-gray-200 bg-center object-cover shadow-sm "/>
