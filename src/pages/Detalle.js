import React, { useState } from 'react';
import MovieDetail from '../components/MovieDetail/MovieDetail';

const Detalle = ({ match }) => {
  const [pelicula, setPelicula] = useState(null);
  const [cargando, setCargando] = useState(true);

  const cargarPelicula = () => {
    const idPelicula = match.params.id;
    
    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=3fdc54d209865d0fa99ee5f520db7d2b`)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setPelicula(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al obtener detalles de la película:', error);
        setCargando(false);
      });
  };

  if (cargando) {
    cargarPelicula();
    return <p>Cargando...</p>;
  }

  return (
    <MovieDetail pelicula={pelicula} />
  );
};

export default Detalle;
