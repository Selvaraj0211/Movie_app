import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"


const Moviescard = ({movie}) => {
  return (
    <div className='bg-gray-500 p-4 relative shadow-xl text-white rounded-lg'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-80 rounded-sm object-contain' />
        <h3 className='text-xl font-bold mt-4'>{movie.title}</h3>
        <p className='text-sm  text-gray-200'>{movie.release_date}</p>
        <button className='absolute top-2 right-2 text-red-500 text-xl'>{
            1!==1 ? <FaHeart/>: <FaRegHeart/>}</button>
    </div>
  )
}

export default Moviescard