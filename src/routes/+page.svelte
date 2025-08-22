<script>
    import Navbar from '$lib/components/features/Navbar.svelte'
    import Hero from '$lib/components/features/Hero.svelte';
    import LatestNews from '$lib/components/features/LatestNews.svelte';
    import RandomPublisher from '$lib/components/features/RandomPublisher.svelte';
    import ExploreNews from '$lib/components/features/ExploreNews.svelte';
    import Footer from '$lib/components/features/Footer.svelte';
    import AppDash from '$lib/components/shared/AppDash.svelte';

    import { onMount } from 'svelte';
	import Modal from '$lib/components/features/Modal.svelte';
	import { get } from 'svelte/store';
	import HeroBottom from '$lib/components/features/HeroBottom.svelte';
	import Index from '$lib/components/skeleton/index.svelte';

    function getRandomData(arr, count){
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function getNewsByPublisher(news, minCount = 3) {
        const shuffled = [...news].sort(() => 0.5 - Math.random());

        for (const n of shuffled) {
            const samePublisher = news.filter(item => item.source === n.source);
            if (samePublisher.length >= minCount) {
            return samePublisher.slice(0, minCount);
            }
        }

        return shuffled.slice(0, minCount);
    }

    function loadMoreNews() {
        const currentLength = getExploreDataNews.length;
        const nextBatch = news.slice(currentLength, currentLength + 8);
        getExploreDataNews = [...getExploreDataNews, ...nextBatch];
    }

    function handleSearch(query) {
        if (!query) {
            searchResults = [];
            return;
        }

        searchResults = news.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 10);
    }

    let news = [];
    let searchResults = [];
    let mainNews = {};
    let picksNews = [];
    let heroBottomNews = [];
    let latestNews = [];
    let newsByPublisher = [];
    let getExploreDataNews = [];
    let isLoading = true;
    let error = null;

    async function loadNews() {
        try {

            const res = await fetch("/api/news");
            const datas = await res.json(); 
            news = datas;

            // Hero 
            mainNews = news[0];

            picksNews = getRandomData(news.slice(49, 69), 3);

            // Bottom hero 
            heroBottomNews = getRandomData(news.slice(70, 89), 4);

            // get 3 latest news 
            latestNews = news.slice(1, 4);

            // by publisher 
            newsByPublisher = getNewsByPublisher(news, 3);

            // Explore news 
            getExploreDataNews = news.slice(0,4)


        } catch (err) {
            console.error('Failed to load news:', err);
            error = err.message;
        } finally {
            isLoading = false;
        }
    }

    onMount(() => {
        loadNews();
    });

    
</script>

<div class="flex justify-center">
    <div class="w-6xl lg:mx-0 m-5">

        {#if isLoading}
            <h1>keren</h1>
        {:else if error}
            <div class="text-center py-12">
                <div class="text-red-500 text-xl mb-4">Failed to load news</div>
                <p class="text-gray-600 mb-4">{error}</p>
                <button 
                    on:click={loadNews}
                    class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-600">
                    Try Again
                </button>
            </div>
        {:else}
            <Index/>  

            <Modal {searchResults} on:search={e => handleSearch(e.detail)} />

            <Navbar/> 
            <Hero mainNews={mainNews} picksNews={picksNews} />
            <HeroBottom datas={heroBottomNews}/>
            <AppDash/>
            <LatestNews datas={latestNews}/>
            <AppDash/>
            <RandomPublisher datas="{newsByPublisher.slice(0,2)}" story="{newsByPublisher[2]}"/>
            <AppDash/>
            <ExploreNews datas={getExploreDataNews} onLoadMore={loadMoreNews} newsLength={news.length}/>
            <Footer/>
        {/if}

    </div>
</div>