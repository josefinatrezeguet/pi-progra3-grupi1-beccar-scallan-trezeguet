import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard"; 
import "./Favorites.css";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoritos: [],
      pelisFav: [],
      verDescripcionId: null,
    };
  }

  componentDidMount() {
    const favoritos = localStorage.getItem("favoritos") 
    ? JSON.parse(localStorage.getItem("favoritos")) : [];
      this.setState({ favoritos });

    for (let i = 0; i < favoritos.length; i++) {
      this.cargarDetalle(favoritos[i]);
    }
  }

  cargarDetalle = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3fdc54d209865d0fa99ee5f520db7d2b`)
      .then((response) => response.json())
      .then((data) => {
        const nuevasPelis = this.state.pelisFav;
        nuevasPelis.push(data);
        this.setState({ pelisFav: nuevasPelis });
      })
      .catch((error) => console.log(error));
  };

  sacarFav = (id) => {
    let nuevosFavs = this.state.favoritos.filter((favoritoId) => favoritoId !== id);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));

    const nuevasPelisFav = this.state.pelisFav.filter((peli) => peli.id !== id);
    this.setState({ favoritos: nuevosFavs, pelisFav: nuevasPelisFav });
  };

  mostrarDescrip = (id) => {
    this.setState({
      verDescripcionId: this.state.verDescripcionId === id ? null : id,
    });
  };

  esFavorito = (id) => {
    return this.state.favoritos.includes(id);
  };

  render() {
    const { pelisFav, verDescripcionId } = this.state;

    return (
      <div className="favoritos">
        <h2>Películas Favoritas</h2>
        <div className="contenedor-peliculas">
          {pelisFav.length > 0 ? (
            pelisFav.map((peli) => (
              <PeliculaCard
                key={peli.id}
                pelicula={peli}
                esFavorito={this.esFavorito}
                agregarFav={this.sacarFav}
                verDescripcionId={verDescripcionId}
                mostrarDescrip={this.mostrarDescrip}
              />
            ))
          ) : (
            <p>No hay películas favoritas aún.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Favorites;
