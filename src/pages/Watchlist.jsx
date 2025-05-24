import React, { useContext, useState } from 'react'
import Genredrop from '../componants/Genredrop';
import { WatchlistContext } from '../context/WatchlistContext';
import Moviescard from "../componants/Moviescard"



const Watchlist = () => {
const{watchlist, genreList} = useContext(WatchlistContext)
const[selectedGenre, setSelectedGenre]=useState("")

const [search, setSearch]=useState("")

const filteredmovie = watchlist.filter((movie)=>
movie.title.toLowerCase().includes(search.toLowerCase())
).filter((movie)=>{
  return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
})

  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search Movies...' 
      onChange={(e)=>setSearch(e.target.value)}
      className='p-2 w-3/4 md:w-1/2 border border-gray-600 bg-blue-900 opacity-80 backdrop-blur-md text-white fixed top-16 left-1/2 -translate-x-1/2 z-10'/>
      <div className='mt-15 flex justify-center'>
        <Genredrop genreList={genreList} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredmovie.map(movie => {
                    return (
                        <Moviescard key={movie.id} movie={movie} />
                    );
                })}</div>
      </div>
  
    )
}

export default Watchlist