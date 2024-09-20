import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Busqueda from "./pages/Busqueda";
import VerMas from "./pages/VerMas";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";

import './css/styles.css';

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search-results" component={Busqueda} />
                <Route exact path="/more/category/:category" component={VerMas} />
                <Route path="/detail/id/:id" component={Detalle} />
                <Route exact path="/favorites" component={Favoritos} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
