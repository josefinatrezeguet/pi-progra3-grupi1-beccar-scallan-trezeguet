import PeliculasPopularesCard from "../PeliculaCard/PeliculaCard";
import React, {Component} from "react";


const API_KEY = '3fdc54d209865d0fa99ee5f520db7d2b';
const peliculasPopulares = `⁠ https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY} ⁠`;


class PeliculasPopulares extends Component {
    constructor() {
        super();
        this.state = {
            populares: [],
            verMas: false,
            textoBoton: "ver mas"
            
        };
    }
    handleVerMas(){
        this.setState({
            verMas: !this.state.verMas 
        })
    }
    componentDidMount() {
        fetch(peliculasPopulares)
            .then(response => response.json())
            .then(data => {this.setState(
                { populares: data.results } 
            )})
            .catch((error) => console.log(error));

        
    }
    render() {

        const {populares, verMas} = this.state;
        const masPelis = verMas ? populares: populares.slice(0,5); 
        return(
            <>
                <section className="card-container">
                    <h2>Películas Populares</h2>
                <div> 
                    {masPelis.length > 0 ? (
                        masPelis.map((pelicula) => (
                            <PeliculasPopularesCard
                                key={pelicula.id}
                                pelicula={pelicula}
                            />
                        ))
                    ) : (
                        <p></p> 
                    )}
                </div>
                <button onClick={() => this.handleVerMas()}> {verMas ? 'ver menos' : 'ver más'} </button>
                
            </section>

           
            </>

        )
    }
}


export default PeliculasPopulares;

