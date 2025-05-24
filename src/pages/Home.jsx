import React, { useEffect, useState } from 'react'
import Moviescard from '../componants/Moviescard'


const Home = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [Search, setSearch] = useState("")
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=918011a9db9c5aecef13082ac4e16ef1`;

        if (Search) {
            url = `https://api.themoviedb.org/3/search/movie?query=${Search}&api_key=918011a9db9c5aecef13082ac4e16ef1`
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    }, [page, Search]);

    return (
        <div className='p-4 pt-16'>
            <input type="text" placeholder='Search Movies...'
                onChange={(e) => setSearch(e.target.value)}
                className='p-2 w-3/4 md:w-1/2 border border-gray-600 bg-blue-900 opacity-80 backdrop-blur-md text-white fixed top-16 left-1/2 -translate-x-1/2 z-10' />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {movies.map(movie => {
                    return (
                        <Moviescard key={movie.id} movie={movie} />
                    );
                })}</div>
            <div className="flex justify-between mt-5">
                <button
                    disabled={page == 1}
                    className='bg-gray-500 text-white rounded p-2'
                    onClick={() => {
                        setPage(prev => prev - 1);
                    }}>PREV</button>
                <button className='bg-gray-500 text-white rounded p-2' onClick={() => {
                    setPage(prev => prev + 1);
                }}>NEXT</button>
            </div>
        </div>
    )
}

export default Home