import React, { useState, useContext } from 'react';
import Movie from './Movie';
import MovieContext from '../context/MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  //* return jsx
  return (
    <div>
      {' '}
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
