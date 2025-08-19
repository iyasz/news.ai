<script lang="ts">
    import Navbar from '$lib/components/features/Navbar.svelte'
    import Hero from '$lib/components/features/Hero.svelte';
    import LatestNews from '$lib/components/features/LatestNews.svelte';
    import RandomAuthor from '$lib/components/features/RandomAuthor.svelte';
    import AllContent from '$lib/components/features/AllContent.svelte';
    import Footer from '$lib/components/features/Footer.svelte';
    import AppDash from '$lib/components/shared/AppDash.svelte';
</script>

<div class="flex justify-center">
    <div class="w-6xl lg:mx-0 m-5">
      <Navbar/> 
      <Hero/>
      <AppDash/>
      <LatestNews/>
      <AppDash/>
      <RandomAuthor/>
      <AppDash/>
      <AllContent/>
      <Footer/>
    </div>
</div>