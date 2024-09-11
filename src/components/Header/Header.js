import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="/notflix.png" className="logo-img" alt="notflix" />
                </div>
            </header>
            <Navbar />
        </div>
    );
}

export default Header;
