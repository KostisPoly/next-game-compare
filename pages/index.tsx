import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Polymeros"}])
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

export default Home
