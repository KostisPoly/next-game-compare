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
    }
}