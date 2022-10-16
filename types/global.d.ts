export { };

declare global {
    type Games = {
        added: number
        added_by_status: object
        background_image: string
        clip: any
        dominant_color: string
        esrb_rating: object
        genres: Array<object>
        id: number
        metacritic: number
        name: string
        parent_platforms: Array<object>
        platforms: Array<object>
        playtime: number
        rating: number
        rating_top: number
        ratings: Array<object>
        ratings_count: number
        released: string
        reviews_count: number
        reviews_text_count: number
        saturated_color: string
        score: any
        short_screenshots: Array<object>
        stores: Array<object>
        suggestions_count: number
        tags: Array<object>
        tba: boolean
        updated: string
        user_game: any
    }

    type Platform = {
        games: Array<object>,
        games_count: number,
        id: number,
        image: string,
        image_background: string,
        name: string,
        slug: string,
        year_end: string,
        year_start: string
    }

    type Genre = {
        games: Array<object>,
        games_count: number,
        id: number,
        image_background: string,
        name: string,
        slug: string
    }
    type HomeProps = {
        platforms: Array<Platform>,
        genres: Array<Genre>
    }

    type sliderProps = {
        clickHandler: (e: React.MouseEvent, id: Array<number>) => void,
        platforms: Array<Platform>,
        genres: Array<Genre>
    }

    type pickerProps = {
        firstList: Array<Games>
        secondList: Array<Games>
        onPickerEnd: Function
        onPickerChange: Function
    }

    type resultProps = {
        id: number
    }

    type GameDetails = {
        id: number,
        slug: string,
        name: string,
        name_original: string,
        description: string,
        metacritic: any,
        metacritic_platforms: Array,
        released: any,
        tba: boolean,
        updated: string,
        background_image: string,
        background_image_additional: string,
        website: string,
        rating: number,
        rating_top: number,
        ratings: Array,
        reactions: any,
        added: number,
        added_by_status: object,
        playtime: number,
        screenshots_count: number,
        movies_count: number,
        creators_count: number,
        achievements_count: number,
        parent_achievements_count: number,
        reddit_url: string,
        reddit_name: string,
        reddit_description: string,
        reddit_logo: string,
        reddit_count: number,
        twitch_count: number,
        youtube_count: number,
        reviews_text_count: number,
        ratings_count: number,
        suggestions_count: number,
        alternative_names: Array,
        metacritic_url: string,
        parents_count: number,
        additions_count: number,
        game_series_count: number,
        user_game: any,
        reviews_count: number,
        community_rating: number,
        saturated_color: string,
        dominant_color: string,
        parent_platforms: Array,
        platforms: Array,
        stores: Array,
        developers: Array
        genres: Array,
        tags: Array,
        publishers: Array,
        esrb_rating: any,
        clip: any,
        description_raw: string
    }

    type gamePlatform = {
        platform:{
            id: number,
            name: string,
            slug: string
        } 
    }

    type gameGenre = {
        games_count: number,
        id: number,
        image_background: string,
        name: string,
        slug: string 
    }
}