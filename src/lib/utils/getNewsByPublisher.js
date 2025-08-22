export function getNewsByPublisher(news, minCount = 3) {
    const shuffled = [...news].sort(() => 0.5 - Math.random());

    for (const n of shuffled) {
        const samePublisher = news.filter(item => item.source === n.source);
        if (samePublisher.length >= minCount) {
        return samePublisher.slice(0, minCount);
        }
    }

    return shuffled.slice(0, minCount);
}