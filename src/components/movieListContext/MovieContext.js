import React,{useState,createContext} from 'react';


export const MovieContext = createContext();


export const MovieProvider = (props) => {

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


    return (
        <MovieContext.Provider value={[movies , setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

