import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>PENSAR NOMBRE</h1> 
                <h1>PENSAR LOGO</h1> 
            </div>
            <Navbar />
        </header>
    )
   }
   
export default Header; 