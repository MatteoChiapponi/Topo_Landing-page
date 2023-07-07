import { Link } from 'react-router-dom'
import './navbar.css'
import { routes } from '../../assets/routes'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.aboutUs}>About Us</Link>
        <Link to={routes.ourServices}>Our Services</Link>
        <Link to={routes.ourProjects}>Our Projects</Link>
        <button id='toggle' onClick={() => {}}>
          change theme
        </button>
      </nav>
    </header>
  )
}

export default Navbar
