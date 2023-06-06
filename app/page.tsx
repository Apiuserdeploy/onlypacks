import Image from 'next/image';
import Trending from './components/trending/Trending';

export default function Home() {
  return (
    <div className='py-5 px-5 md:px-24'>

      <Trending/>

    </div>
  )
}
