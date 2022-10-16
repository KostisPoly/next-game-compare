import React from 'react'

const GameDetails: React.FC<GameDetails> = (props) => {

    const {
        name,
        slug,
        description_raw,
        parent_platforms,
        genres
    } = props;

    if(parent_platforms && genres) {
        return (
            <div>
                <div>Name: {name}</div>
                <div>Description: {description_raw}</div>
                {parent_platforms.map(
                    (el:gamePlatform) => (
                        <div
                            key={el.platform.id}
                        >{el.platform.name}</div>
                    )
                )}
                {genres.map(
                    (el:gameGenre) => (
                        <div
                            key={el.id}
                        >{el.name}</div>
                    )
                )}
                <div><a href={`https://rawg.io/games/${slug}`} target="_blank" rel="noreferrer">Check out {name} on RAWG</a></div>
            </div>
        )
    }

    return <div>LOADING.....GAME DETAILS</div>
}

export default GameDetails;