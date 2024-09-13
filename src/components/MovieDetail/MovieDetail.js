import React, { Component } from "react";
import "./MovieDetail.css";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            loading: true,
            esFavorito: false
        };
    }

    componentDidMount() {
        this.infoPeli();
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.infoPeli();
        }
    }

    infoPeli = () => {
        const id = this.props.id;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=378786c706182646715863ed0e6d66cc`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ movie: data, loading: false });
                this.chequeoFav(data.id);
            })
            .catch(error => console.log(error));
    }

    chequeoFav = (id) => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        this.setState({ esFavorito: favoritos.includes(id) });
    }

    agregarFav = () => {
        const { movie, esFavorito } = this.state;
        const id = movie.id;
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (esFavorito) {
            favoritos = favoritos.filter(favId => favId !== id);
        } else {
            favoritos.push(id);
        }

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        this.setState({ esFavorito: !esFavorito });
    }

    render() {
        const { movie, loading, esFavorito } = this.state;

        if (loading) {
            return <p>Cargando...</p>;
        }

        if (!movie) {
            return <p>Hubo un error al cargar los detalles de la película.</p>;
        }

        return (
            <section className="card-container">
                <div className="movie-card">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <h4>{movie.title}</h4>
                    <p><strong>Calificación:</strong> {movie.vote_average}</p>
                    <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
                    <p><strong>Duración:</strong> {movie.runtime} minutos</p>
                    <p><strong>Género:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
                    <p>{movie.overview}</p>
                    <button onClick={this.agregarFav}>
                        {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
                    </button>
                    <a href="/">Volver al inicio</a>
                </div>
            </section>
        );
    }
}

export default MovieDetail;
