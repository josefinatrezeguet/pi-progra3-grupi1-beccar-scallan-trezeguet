import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({ pelicula, agregarFavorito }) => {
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
        <p><strong>Calificación:</strong> {pelicula.vote_average}</p>
        <p><strong>Fecha de lanzamiento:</strong> {pelicula.release_date}</p>
        <p><strong>Duración:</strong> {pelicula.runtime} minutos</p>
        <p><strong>Género:</strong> {pelicula.genres.map(g => g.name).join(', ')}</p>
        <p>{pelicula.overview}</p>
        <button onClick={agregarFavorito}>Agregar a Favoritos</button>
        <a href="/">Volver al inicio</a>
      </div>
    </section>
  );
};

export default MovieDetail;
