import { Children, createContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
    const [genreList, setgenreList]=useState([])
    const [download, setdownload]= useState([]);
    useEffect(() => {
            let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=918011a9db9c5aecef13082ac4e16ef1`;
    
        
            fetch(url)
                .then((response) => response.json())
                .then((data) => setgenreList(data.genres || []));
        }, []);
const toggledownload = (movie) => {
    const index = download.findIndex((m) => m.id === movie.id);
    if (index === -1) {
        setdownload([...download, movie]);
        console.log("Movie added to download:", movie);
    } else {
        setdownload([
            ...download.slice(0, index),
            ...download.slice(index + 1),
        ]);
        console.log("Movie removed from download:", movie);
    }
};


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
        <WatchlistContext.Provider value={{ watchlist, toggleWatchlist, toggledownload, genreList, download }}>
            {children}
        </WatchlistContext.Provider>
    );
};

export { WatchlistContext };
