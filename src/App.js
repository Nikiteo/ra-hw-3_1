import './App.css';
import React from 'react';
import Movie from './components/MovieCards/MovieCards';
import getMovie from './getMovieCards';
import shortid from 'shortid';


export default function App() {
  const movieIndex = getMovie().map((item) => ({id:shortid.generate(), value:item}));
  return (
    <div className="app">
      {movieIndex.map((item) => (<Movie key={item.id} movie={item.value} />))}
    </div>
  );
}