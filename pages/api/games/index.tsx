const pageSize: number = 40;
import { getRandomPages } from '@/utils/randomize'
import { filterArray } from '@/utils/filter'

export async function getGamesData(platformId: number, genreId: number) {
    const pages = getRandomPages();
    const response = await fetch(
        `https://api.rawg.io/api/games?key=9abaeff8bd85491fb09a184b1aaf4ff4&platforms=${platformId}&genres=${genreId}&page_size=${pageSize}&page=${pages[0]}`);
    const jsonData = await response.json();
    const secondResponse = await fetch(`https://api.rawg.io/api/games?key=9abaeff8bd85491fb09a184b1aaf4ff4&platforms=${platformId}&genres=${genreId}&page_size=${pageSize}&page=${pages[1]}`);
    const moreJsonData = await secondResponse.json();
    let resultsMerged = jsonData.results.concat(moreJsonData.results);
    resultsMerged = resultsMerged.sort(() => Math.random() - 0.5);
    // return filterArray(resultsMerged);
    return resultsMerged;
}