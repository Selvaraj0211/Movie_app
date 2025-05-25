import React, { useContext, useState } from 'react'
import { FaDownload, FaHeart, FaRegHeart, FaCheckCircle, FaStar } from "react-icons/fa"
// import { MdDownloadDone } from "react-icons/md";
import { WatchlistContext } from "../context/WatchlistContext";





const Moviescard = ({movie}) => {
 const { toggleWatchlist, watchlist, toggledownload ,download  } = useContext(WatchlistContext);
const {starrat, setstarrat}= useState([])

 const starrating = Math.round(movie.vote_average / 2); 
    


const indownload = download.some(m=>m.id=== movie.id)
  const inwatchlist = watchlist.some(m=>m.id=== movie.id)
  return (
    <div className='bg-red-200 p-4 relative shadow-xl rounded-lg'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-80 rounded-sm object-contain' />
        <h3 className='text-xl font-bold mt-4'>{movie.title}</h3>
        <p className='text-sm  text-black'>{movie.release_date}</p>
        <p className='text-black text-sm'>Rating: {starrating}/5 <FaStar className='inline mb-1 text-yellow-500'/></p>
        <button onClick={()=>toggleWatchlist(movie)}
        className='absolute top-2 right-2 text-red-500 text-xl'>{
            inwatchlist ? <FaHeart/>: <FaRegHeart/>}</button>
            <button  onClick={()=>toggledownload(movie)}
            className='absolute right-5 bottom-4'>{
            indownload ?<FaCheckCircle className='text-green-600'/>: <FaDownload className='text-blue-500' />}
            </button>
    </div>
  )
}

export default Moviescard