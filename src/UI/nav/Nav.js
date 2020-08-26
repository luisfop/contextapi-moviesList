import React,{useContext} from 'react';
import './Nav.css';

import {MovieContext} from '../../components/movieListContext/MovieContext';


const Nav = () => {
    const [movies, setMovies ] = useContext(MovieContext);

    return(
        <div className="Nav">
            <h3>Luis Developer</h3>
            <p>List of Movies: {movies.length}  </p>
        </div>
    )
}


export default Nav;