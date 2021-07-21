import React from 'react';
import './MovieCards.css';
import Stars from '../Stars/Stars';

export default function Movie({ movie }) {
    return (
    <div className="movie">
      <div className="movie-img" />
      <div className="movie-title">{movie.name}</div>
      <ul className="movie-stars">
        <Stars rate={movie.rate} />
      </ul>
    </div>
  );
}