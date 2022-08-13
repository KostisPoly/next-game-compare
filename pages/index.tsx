import type { NextPage, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { getPlatformData } from '@/pages/api/platforms'
import { getGenreData } from '@/pages/api/genres'
import { trpc } from '@/utils/trpc';
import Sliders from '@/components/Sliders';

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

const Home: React.FC<HomeProps> = ( props: HomeProps) => {
  const { platforms, genres } = props;
  const clickHandler = (e: React.MouseEvent, sliders: Array<number>) => {
    // console.log(sliders[0]);
    // console.log(sliders[1]);
    //isLoading = true;
  }
  // if(1 === 1) return <div>LOADING....</div>

  if(1 === 1) return <Sliders 
    clickHandler={(e: React.MouseEvent, sliders: Array<number>) => clickHandler(e, sliders)}
    platforms={platforms}
    genres={genres}
    />;
  return (
    <div
      className='h-screen w-screen flex flex-col justify-center items-center'
    >
      <div
        className='text-2xl text-center pb-6'
      >
        Pick your game of choise!
      </div>
      <div
        className='border rounded p-8 flex justify-between items-center max-w-2xl'
      >
        <div
          className='w-16 h-16 bg-red-500'
        >

        </div>
        <div
          className='m-8'
        >VS</div>
        <div
          className='w-16 h-16 bg-red-500'
        >

        </div>
      </div>
    </div>
  );
}


export async function getStaticProps(context: GetStaticPropsContext) {
  const platformData = await getPlatformData();
  const genreData = await getGenreData();
  // console.log(platformData);
  // console.log(genreData);
  return { props: {
    platforms: platformData,
    genres: genreData
  }
};
}

export default Home
