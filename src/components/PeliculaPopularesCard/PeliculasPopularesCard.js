import React, {Component} from "react";

class PeliculasPopularesCard extends Component{
    constructor(){
        super();
        this.state = {
            description: null,
        }
    };
    render(){
        const {pelicula} = this.props;
        return(
            <>
            <h1> {pelicula.title} </h1>
             <img
                 src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                 alt={pelicula.title}
            />
            </>
        )
    }
}

export default PeliculasPopularesCard