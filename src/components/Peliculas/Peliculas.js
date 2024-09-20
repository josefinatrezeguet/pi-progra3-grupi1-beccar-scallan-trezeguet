import React, { Component } from "react";
import { Link } from "react-router-dom";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import "./Peliculas.css";

const API_KEY = '3fdc54d209865d0fa99ee5f520db7d2b';
const URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const URL_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      enCartelera: [],
      favoritos: [],
    };
  }

  componentDidMount() {
    if (!this.props.movies) {
      fetch(URL_POPULAR)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ populares: data.results.slice(0, 5) });
        })
        .catch((error) => console.log(error));

      fetch(URL_NOW_PLAYING)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ enCartelera: data.results.slice(0, 5) });
        })
        .catch((error) => console.log(error));

      const favoritos = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : [];
        this.setState({ favoritos });
    }
  }

  agregarFav = (id) => {
    let { favoritos } = this.state;
    if (favoritos.includes(id)) {
      favoritos = favoritos.filter((favoritoId) => favoritoId !== id);
    } else {
      favoritos.push(id);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
      this.setState({ favoritos });
  };

  esFavorito = (id) => {
    return this.state.favoritos.includes(id);
  };

  render() {
    const { populares, enCartelera } = this.state;
    const { movies } = this.props;

    return (
      <div className="peliculas">
        {movies ? (
          <section>
            <h2>RESULTADOS DE BÚSQUEDA</h2>
            <div className="contenedor-peliculas">
              {movies.length > 0 ? (
                movies.map((peli) => (
                  <PeliculaCard
                    key={peli.id}
                    pelicula={peli}
                    esFavorito={this.esFavorito}
                    agregarFav={this.agregarFav}
                  />
                ))
              ) : (
                <p>No se encontraron resultados.</p>
              )}
            </div>
          </section>
        ) : (
          <>
            <section>
              <h2>PELÍCULAS POPULARES</h2>
              <div className="contenedor-peliculas">
                {populares.length > 0 ? (
                  populares.map((peli) => (
                    <PeliculaCard
                      key={peli.id}
                      pelicula={peli}
                      esFavorito={this.esFavorito}
                      agregarFav={this.agregarFav}
                    />
                  ))
                ) : (
                  <p>Cargando...</p>
                )}
              </div>
              <Link to="/more/category/popular">VER MÁS PELÍCULAS POPULARES</Link>
            </section>

            <section>
              <h2>PELÍCULAS EN CARTELERA</h2>
              <div className="contenedor-peliculas">
                {enCartelera.length > 0 ? (
                  enCartelera.map((peli) => (
                    <PeliculaCard
                      key={peli.id}
                      pelicula={peli}
                      esFavorito={this.esFavorito}
                      agregarFav={this.agregarFav}
                    />
                  ))
                ) : (
                  <p>Cargando...</p>
                )}
              </div>
              <Link to="/more/category/now_playing">VER MÁS PELÍCULAS EN CARTELERA</Link>
            </section>
          </>
        )}
      </div>
    );
  }
}

export default Peliculas;
