import React from "react";
import "./App.css";

import MovieList from "./components/movieList/MovieList";
import Nav from "./UI/nav/Nav";
import { MovieProvider } from "./components/movieListContext/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
