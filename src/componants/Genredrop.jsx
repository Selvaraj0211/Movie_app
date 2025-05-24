import React, { useContext } from 'react'

const Genredrop = ({genreList, setSelectedGenre}) => {
  
  
  return (
    <select className='p-2 bg-gray-900 opacity-60 text-white border rounded mb-2' onChange={(e)=>setSelectedGenre(e.target.value)}>
      <option value="">All genres</option>
        {genreList.map(genre=>{
          return(
            <option key={genre} value={genre.id}>{genre.name}</option>
          ) 
        })}
    </select>
  )
}

export default Genredrop