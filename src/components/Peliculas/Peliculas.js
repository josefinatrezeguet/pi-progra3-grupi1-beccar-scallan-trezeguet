import React, { Component } from "react";
import "./Peliculas.css";

const API_KEY = '3fdc54d209865d0fa99ee5f520db7d2b';
const URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const URL_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

class Peliculas extends Component {
  constructor() {
    super();
    this.state = {
      populares: [],
      enCartelera: [],
      verDescripcion: {},
    };
  }

  componentDidMount() {
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
  }

  toggleDescripcion = (id) => {
    this.setState((prevState) => ({
      verDescripcion: {
        ...prevState.verDescripcion,
        [id]: !prevState.verDescripcion[id],
      },
    }));
  };

  agregarFavorito = (id) => {
    console.log(`Película ${id} añadida a favoritos`);
  };

  render() {
    const { populares, enCartelera, verDescripcion } = this.state;

    return (
      <div className="peliculas">
        <section>
          <h2>Películas populares</h2>
          <div className="contenedor-peliculas">
            {populares.length > 0 ? (
              populares.map((peli) => (
                <article key={peli.id} className="pelicula">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                    alt={peli.title}
                  />
                  <h3>{peli.title}</h3>
                  <button onClick={() => this.toggleDescripcion(peli.id)}>
                    {verDescripcion[peli.id] ? 'Ocultar Descripción' : 'Ver Descripción'}
                  </button>
                  {verDescripcion[peli.id] && <p>{peli.overview}</p>}
                  <a href={`/detail/id/${peli.id}`}>Detalle</a>
                  <button onClick={() => this.agregarFavorito(peli.id)}>Favorito</button>
                </article>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </div>
          <a href="/more/category/popular">Ver Todas - Películas más populares</a>
        </section>

        <section>
          <h2>Películas en cartelera</h2>
          <div className="contenedor-peliculas">
            {enCartelera.length > 0 ? (
              enCartelera.map((peli) => (
                <article key={peli.id} className="pelicula">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                    alt={peli.title}
                  />
                  <h3>{peli.title}</h3>
                  <button onClick={() => this.toggleDescripcion(peli.id)}>
                    {verDescripcion[peli.id] ? 'Ocultar Descripción' : 'Ver Descripción'}
                  </button>
                  {verDescripcion[peli.id] && <p>{peli.overview}</p>}
                  <a href={`/detail/id/${peli.id}`}>Detalle</a>
                  <button onClick={() => this.agregarFavorito(peli.id)}>Favorito</button>
                </article>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </div>
          <a href="/more/category/now_playing">Ver Todas - Películas en cartelera</a>
        </section>
      </div>
    );
  }
}

export default Peliculas;


