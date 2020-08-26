import React,{useState} from 'react';

import Movie from '../movie/Movie';


const MovieList = () => {

    const [movies, setMovies ] = useState([
        {
            name: 'Star Wars',
            price: 'R$: 99,90',
            id: 13212
        },
        {
            name: 'Lord of the Rings',
            price: 'R$: 59,90',
            id: 23211
        },
        {
            name: 'Into the Wild - Na natureza selvagem',
            price: 'R$: 49,90',
            id: 34777
        }
    ]);
    




    return(
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    )

}


export default MovieList;