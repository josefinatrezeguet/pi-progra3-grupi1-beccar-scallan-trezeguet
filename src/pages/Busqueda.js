import { Component } from "react";
import Peliculas from "../components/Peliculas/Peliculas";

class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        const query = this.props.location.state.query; 
        fetch(" https://api.themoviedb.org/3/search/movie?api_key=3fdc54d209865d0fa99ee5f520db7d2b&query=${query}") 
        .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results, 
                    isLoading: false,
                });
            })
            .catch((e) => console.log(e));
    }

    render() {
        return (
            <>
                {!this.state.isLoading ? (
                    <Peliculas movies={this.state.movies} />
                ) : (
                    <p>Cargando...</p>
                )}
            </>
        );
    }
}

export default Busqueda;