import React, { useState } from 'react'
import type { NextPage, GetStaticPropsContext } from 'next'
import { getPlatformData } from '@/pages/api/platforms'
import { getGenreData } from '@/pages/api/genres'
import { getGamesData } from '@/pages/api/games'
import Sliders from '@/components/Sliders';
import Picker from '@/components/Picker';

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstList, setFirstList] = useState<Array<Games>>([]);
  const [secondList, setSecondList] = useState<Array<Games>>([]);
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
