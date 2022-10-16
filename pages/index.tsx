import React, { useState, useRef } from 'react'
import type { NextPage, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { getPlatformData } from '@/pages/api/platforms'
import { getGenreData } from '@/pages/api/genres'
import { getGamesData } from '@/pages/api/games'
import Sliders from '@/components/Sliders';
import Picker from '@/components/Picker';

const Home: React.FC<HomeProps> = (props: HomeProps) => {

  const nodeRef = useRef(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstList, setFirstList] = useState<Array<Games>>([]);
  const [secondList, setSecondList] = useState<Array<Games>>([]);

  const [firstActive, setFirstActive] = useState<number>(0);
  const [secondActive, setSecondActive] = useState<number>(0);
  const [resultId, setResultId] = useState<number>(0);
  
  const { platforms, genres } = props;

  const clickHandler = async (e: React.MouseEvent, sliders: Array<number>) => {
    setIsLoading(true);
    const platformId: number = sliders[0];
    const genreId: number = sliders[1];
    const gamesList = await getGamesData(platformId, genreId);
    const middle = Math.ceil(gamesList.length / 2);
    const first = gamesList.splice(0, middle);
    const second = gamesList.splice(-middle);

    setFirstList(first)
    setSecondList(second)
    setIsLoading(false)
  }

  const swiperChangeHandler = ( swiper : number, index : number) => {
    if ( swiper === 1 ) {
      setFirstActive(index)
    } else {
      setSecondActive(index);
    }
    
  }

  const swiperEndHandler = (cube: number) => {
    cube === 1 ? setResultId(secondList[secondActive].id) : setResultId(firstList[firstActive].id);
}

  if ( resultId > 0 ) return <Link  ref ={nodeRef}  href={{
    pathname:'/result', query: { id: resultId }
}}
>AND THE WINNER IS...</Link>

  if (firstList.length === 0 && !isLoading) return <Sliders
    clickHandler={(e: React.MouseEvent, sliders: Array<number>) => clickHandler(e, sliders)}
    platforms={platforms}
    genres={genres}
  />;

  if (firstList.length && !isLoading) {
    return (
      <Picker
        firstList={firstList}
        secondList={secondList}
        onPickerEnd={swiperEndHandler}
        onPickerChange={swiperChangeHandler}
      />
    );
  }

  return <div>LOADING.....</div>
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const platformData = await getPlatformData();
  const genreData = await getGenreData();

  return {
    props: {
      platforms: platformData,
      genres: genreData
    }
  };
}

export default Home
