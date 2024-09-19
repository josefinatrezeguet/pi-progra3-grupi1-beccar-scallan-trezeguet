import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="main-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favoritos</Link></li>
                <li><Link to="/more/category/popular">Ver todas las películas más populares</Link></li>
                <li><Link to="/more/category/now_playing">Ver todas las películas en cartelera</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
