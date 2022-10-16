// import jsonFile from '@/public/games.json'

const toKeep = ['background_image',
    'id',
    'metacritic',
    'name',
    'ratings',
    'ratings_count',
    'released',
    'short_screenshots',
    'slug'
];

export const filterArray = (array: Array<object>) => {
    let toSend: Array<object> = [];
    array.forEach((el, index) => {
        let helper = Object.keys(el)
            .filter(key => {
                toKeep.includes(key)
            })
            .reduce((obj, key) => {
                return {
                    ...obj,
                    [key]: toKeep[key as any]
                };
            }, {});
        toSend.push(helper);
    })
    return toSend;
}