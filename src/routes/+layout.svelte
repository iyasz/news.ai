<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href="{favicon}" sizes="16x16"  type="image/png">

    <title>News.ai | Baca berita terkini tentang AI</title>

	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&display=swap" rel="stylesheet">
</svelte:head>

{@render children?.()}
