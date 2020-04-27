import React, { useState, useContext } from 'react';
import MovieContext from '../context/MovieContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();

    // setMovies((movies) => [...movies, { name: name, price: price }]);
    setMovies((prevMovies) => [...prevMovies, { name, price }]);
  };

  return (
    <form onSubmit={addMovie}>
      <input type='text' name='name' value={name} onChange={updateName} />
      <input
        type='text'
        name='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
