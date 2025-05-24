import { Children, createContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
    const [genreList, setgenreList]=useState([])
    useEffect(() => {
            let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=918011a9db9c5aecef13082ac4e16ef1`;
    
        
            fetch(url)
                .then((response) => response.json())
                .then((data) => setgenreList(data.genres || []));
        }, []);

    const toggleWatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);
        if (index === -1) {
            setWatchlist([...watchlist, movie]);
        } else {
            setWatchlist([
                ...watchlist.slice(0, index),
                ...watchlist.slice(index + 1),
            ]);
        }
    };

    return (
        <WatchlistContext.Provider value={{ watchlist, toggleWatchlist, genreList}}>
            {children}
        </WatchlistContext.Provider>
    );
};

export { WatchlistContext };
