import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';

const Nav = ({ movie }) => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='flex'>
      <h3>Dev Alex</h3>
      <p>List of Movies : {movies.length}</p>
    </div>
  );
};

export default Nav;
