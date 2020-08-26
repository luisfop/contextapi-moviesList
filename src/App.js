import React from 'react';
import './App.css';

import MovieList from  './components/movieList/MovieList';

function App() {
  return (
    <div className="App">
      <h1>Movies List</h1>
      <MovieList/>
    </div>
  );
}

export default App;
