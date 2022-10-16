import {useRouter} from "next/router";
import React, { useEffect, useState } from 'react'
import { getGameDetails } from '@/pages/api/games'
import GameDetails from "@/components/GameDetails";

const Results: React.FC<resultProps> = (props) => {
    
    const { query } = useRouter();
    const gameId = query.id as string;
    const [gameDetails, setGameDetails] = useState<GameDetails>({} as GameDetails);

    useEffect( () => {
        async function fetchGameData(){
            const response = await getGameDetails(gameId);
            setGameDetails( response );
        }

        fetchGameData();
    },[gameId])

    if(gameDetails){
        return (
            <GameDetails
                {...gameDetails}
            />
        )
    }
    
    return <div>LOADING.....RESULT</div>
}

export default Results