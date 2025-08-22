<script>
    import defaultThumbnail from "$lib/assets/default_thumbnail.png"
    export let src = "";
    export let styleClass = "";

    function handleError(e) {
        e.currentTarget.src = defaultThumbnail;
    }
</script>


<img src={src || defaultThumbnail} alt="thumbnail" loading="lazy" on:error={handleError} class="{styleClass} bg-gray-200 bg-center object-cover shadow-sm "/>
