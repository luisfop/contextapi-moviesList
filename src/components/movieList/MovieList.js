import React,{useContext} from 'react';

import Movie from '../movie/Movie';

import {MovieContext} from '../movieListContext/MovieContext';



const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext);

    return(
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    )

}


export default MovieList;