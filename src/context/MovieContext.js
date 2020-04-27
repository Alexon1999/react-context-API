import React, { useState, createContext } from 'react';
import MovieList from '../components/MovieList';

//* si on veut une information de MovieProvider on exporte Movie Context
const MovieContext = createContext();
export default MovieContext;

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '24£',
      id: 1,
    },
    {
      name: 'Game of throne',
      price: '10£',
      id: 2,
    },
    {
      name: 'Inception',
      price: '100£',
      id: 3,
    },
    {
      name: 'Inception',
      price: '100£',
      id: 4,
    },
  ]);

  return (
    //! MovieContext passe info aux different components au même temps
    <MovieContext.Provider value={[movies, setMovies]}>
      {/* <Nav />
      <MovieList /> */}
      {props.children}
    </MovieContext.Provider>
  );
};

// !Pour utiliser ce context on va faire un
// !import {useContext} from 'react'
// const [movies, setMovies] = useContext(MovieContext);
