import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { WatchlistContext } from "../context/WatchlistContext";





const Moviescard = ({movie}) => {
 const { toggleWatchlist, watchlist } = useContext(WatchlistContext);

  const inwatchlist = watchlist.some(m=>m.id=== movie.id)
  return (
    <div className='bg-gray-500 p-4 relative shadow-xl text-white rounded-lg'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-80 rounded-sm object-contain' />
        <h3 className='text-xl font-bold mt-4'>{movie.title}</h3>
        <p className='text-sm  text-gray-200'>{movie.release_date}</p>
        <button onClick={()=>toggleWatchlist(movie)}
        className='absolute top-2 right-2 text-red-500 text-xl'>{
            inwatchlist ? <FaHeart/>: <FaRegHeart/>}</button>
    </div>
  )
}

export default Moviescard