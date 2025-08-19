<script>
    export let type = "h1";
    export let href = "/"; 
    const classTailwind = "md:text-lg text-sm leading-[1.2] text-medium hover:underline line-clamp-2 font-semibold";
</script>

{#if type === "a"}
    <a href={href} class="{classTailwind}">
        <slot></slot>
    </a>
{:else}
    <h1 class="{classTailwind}">
        <slot></slot>
    </h1>
{/if}
