const MAX_PAGES = 10;

export const getRandomPage: (notThisOne?: number) => number = (notThisOne?: number) => {
    const pageNumber = Math.floor(Math.random() * MAX_PAGES) + 1;

    if (pageNumber !== notThisOne) return pageNumber;
    return getRandomPage(notThisOne);
}

export const getRandomPages = () => {
    const first = getRandomPage();
    const second = getRandomPage(first);

    return [first, second];
}