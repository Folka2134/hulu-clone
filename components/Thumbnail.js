import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w780"
  return (
    <div className='p-2 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        layout='responsive'
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}`
        }
        height={1080}
        width={1920}
        alt='thumbnail'
      />
      <div className='p-2'>
        <p className='truncate max-w-md' >{result.overview}</p>
        <h2 className='truncate max-w-md mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100 capitalize'>
          {result.media_type}{" "}
          {result.release_date || result.first_air_date}{" "}
          <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        </p>
      </div>
    </div>
  )
}
