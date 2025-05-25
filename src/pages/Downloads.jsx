import React, { useContext } from 'react'
import { WatchlistContext } from '../context/WatchlistContext';
import Moviescard from '../componants/Moviescard';

const Downloads = () => {
  const { download } = useContext(WatchlistContext);
  console.log("Downloaded Movies:", download);


  return (
    <div className='p-4 pt-16'>
      <h2 className='text-2xl text-white mb-4'>Downloaded Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {download.map(movie => (
          <Moviescard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Downloads;