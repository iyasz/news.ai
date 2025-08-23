import { NEWSAPI_API_KEY, NEWSDATA_API_KEY, GNEWS_API_KEY } from "$env/static/private"

export async function GET() {
    const res = await fetch( `https://newsapi.org/v2/everything?q="Artificial Intelligence"&sortBy=publishedAt&apiKey=${NEWSAPI_API_KEY}`)
    const res2 = await fetch(`https://newsdata.io/api/1/latest?apikey=${NEWSDATA_API_KEY}&q="Artificial Intelligence"`)
    const res3 = await fetch(`https://gnews.io/api/v4/search?q="Artificial Intelligence"&max=10&sortby=publishedAt&apikey=${GNEWS_API_KEY}`)

    const data = await res.json();
    const data2 = await res2.json();
    const data3 = await res3.json();

    let allData = [];

    // handle first request
    data.articles.forEach(element => {
        allData.push({
            source: element.source.name,
            title: element.title,
            description: element.description,
            url: element.url,
            thumbnail: element.urlToImage,
            published_at: element.publishedAt,
            created_at: Date.now(),
        })
    });
    
    // handle secornd request 
    data2.results.forEach(element => {
        allData.push({
            source: element.source_name,
            title: element.title,
            description: element.description,
            url: element.link,
            thumbnail: element.image_url,
            published_at: element.pubDate,
            created_at: Date.now(),
        })
    });

    // handle third request 
    data3.articles.forEach(element => {
        allData.push({
            source: element.source.name,
            title: element.title,
            description: element.description,
            url: element.url,
            thumbnail: element.image,
            published_at: element.publishedAt,
            created_at: Date.now(),
        })
    });

    let sortData = allData.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    return new Response(JSON.stringify(sortData), {
        headers: { 
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=30000",
        }
    })
}