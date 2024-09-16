import { Component } from "react";
import Peliculas from "../components/Peliculas/Peliculas"

class Busqueda extends Component {
    constructor (props){
        super (props) 

        this.state = {
            movies : [], 
            isLoading: true, 
            
        }
    }
    
    componentDidMount () {
        this.setState({
            isLoading: true
        })
        fetch("poner api key maria {this.props.location.state.query} ") 
        .then((response) => response.json())
        .then ((data) => {
            this.setState ({
                movies: data.result,
                isLoading: false,
            })
        })
        .catch((e) => console.log (e))
    }
    
    render(){
        return (
            <>
            {!this.state.isLoading ?
            (<Peliculas movies={this.state.movies}></Peliculas>)
            : (
                <p> Cargando...</p>
            )
        }
            
            </>
        )
    }
}
export default Busqueda;