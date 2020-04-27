import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/nav';
import { MovieProvider } from './context/MovieContext';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <MovieProvider>
      {/* Tout ce qui est dans MovieProvider auront tous les infos de Movies */}
      <div className='App'>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
