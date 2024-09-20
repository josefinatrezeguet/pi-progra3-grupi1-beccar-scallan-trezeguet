import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import "./VerMasComponent.css";

const API_KEY = '3fdc54d209865d0fa99ee5f520db7d2b';
const URLS = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
};

class VerMasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
      filterValue: "",
      favoritos: [],
    };
  }

  componentDidMount() {
    const { category } = this.props.match.params; 
    const url = URLS[category];

    if (url) {  
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            movies: data.results,
            filteredMovies: data.results,
          });
        })
        .catch((error) => console.log(error));
    }

    const favoritos = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : [];
      this.setState({ favoritos });
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

  handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    this.setState((prevState) => ({
      filterValue,
      filteredMovies: prevState.movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterValue)
      ),
    }));
  };

  render() {
    const { filteredMovies } = this.state;
    const { category } = this.props.match.params;

    const pageTitle = category === 'popular' ? 'Películas populares' : category === 'now_playing' ? 'Películas en cartelera' 
    : 'Películas';

    return (
      <div className="peliculas-page">
        <h2>{pageTitle}</h2>
        <div className="contenedor-peliculas">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((peli) => (
              <PeliculaCard
                key={peli.id}
                pelicula={peli}
                esFavorito={this.esFavorito}
                agregarFav={this.agregarFav}
              />
            ))
          ) : (
            <p>No se encontraron películas.</p>
          )}
        </div>
      </div>
    );
  }
}

export default VerMasComponent;
