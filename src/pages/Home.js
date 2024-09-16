import React from "react";
import { Component } from "react";
import Form from "../components/Forms/Form";
import Peliculas from "../components/Peliculas/Peliculas";

class Home extends Component {
    render() {
        return (
            <>
                <Form history={this.props.history} />
                <Peliculas />
            </>
        );
    }
}

export default Home;
