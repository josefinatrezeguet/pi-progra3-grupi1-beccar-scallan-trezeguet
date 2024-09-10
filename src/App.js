import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Busqueda from "./pages/Busqueda";
import VerTodas from "./pages/VerTodas";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search-results" component={Busqueda}/>
          <Route exact path="/see-more/category/:category" component={VerTodas}/>
          <Route path="/movie-detail/id/:id" component={Detalle}/>
          <Route exact path="/favorites" component={Favoritos}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
    </>
  );
}
export default App;
