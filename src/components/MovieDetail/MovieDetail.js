import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = ({ pelicula }) => {
  if (!pelicula) {
    return <p>No hay detalles disponibles</p>;
  }

  return (
    <section className="card-container">
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          alt={pelicula.title}
        />
        <h4>{pelicula.title}</h4>
        <p>{pelicula.overview}</p>
        <p>Fecha de lanzamiento: {pelicula.release_date}</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    </section>
  );
};

export default MovieDetail;
