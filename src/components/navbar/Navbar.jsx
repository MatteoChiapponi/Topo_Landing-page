import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  
  return (
    <header>
      <nav>
        <Link to={""}>Home</Link>
        <Link to={""}>About Us</Link>
        <Link to={""}>Our Services</Link>
        <Link to={""}>Our Proyects</Link>
        <button id="toggle" onClick={()=>{}}>change theme</button>
      </nav>
    </header>
  );
};

export default Navbar;