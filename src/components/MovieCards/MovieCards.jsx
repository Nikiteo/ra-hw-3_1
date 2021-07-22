import React from 'react';
import './MovieCards.css';
import Stars from '../Stars/Stars';

export default function Movie({ movie, img }) {
    return (
    <div className="movie">
      <img className="movie-img" src={img} alt=''/>
      <div className="movie-title">{movie.name}</div>
      <ul className="movie-stars">
        <Stars rate={movie.rate} />
      </ul>
    </div>
  );
}