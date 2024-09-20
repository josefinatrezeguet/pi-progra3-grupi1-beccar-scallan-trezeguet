import React, { Component } from "react";
import { Link } from "react-router-dom"; 

class PeliculaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verDescripcionId: null,
    };
  }

  mostrarDescrip = () => {
    const { verDescripcionId } = this.state;
    const { pelicula } = this.props;
    this.setState({
      verDescripcionId: verDescripcionId === pelicula.id ? null : pelicula.id,
    });
  };

  render() {
    const { pelicula, esFavorito, agregarFav } = this.props;
    const { verDescripcionId } = this.state;

    return (
      <article className="pelicula">
        <img
          src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          alt={pelicula.title}
        />
        <h3>{pelicula.title}</h3>

        <button onClick={this.mostrarDescrip}>
          {verDescripcionId === pelicula.id ? "Ocultar descripción" : "Ver descripción"}
        </button>

        {verDescripcionId === pelicula.id && <p>{pelicula.overview}</p>}

        <Link to={`/detail/id/${pelicula.id}`}>DETALLE</Link> 
        
        {esFavorito(pelicula.id) ? (
          <button onClick={() => agregarFav(pelicula.id)}>Quitar de favoritos</button>
        ) : (
          <button onClick={() => agregarFav(pelicula.id)}>Agregar a favoritos</button>
        )}
      </article>
    );
  }
}

export default PeliculaCard;
