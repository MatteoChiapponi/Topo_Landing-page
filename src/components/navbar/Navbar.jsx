import { Link } from 'react-router-dom'
import './navbar.css'
import { routes } from '../../assets/routes'
import { useGlobalStates } from '../../utils/global.context'

const Navbar = () => {
  const { states, dispatch } = useGlobalStates()
  return (
    <header>
      <nav>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.aboutUs}>About Us</Link>
        <Link to={routes.ourServices}>Our Services</Link>
        <Link to={routes.ourProjects}>Our Projects</Link>
        <button
          id='toggle'
          onClick={() => dispatch({ type: 'theme', payload: !states.theme })}
        >
          change theme
        </button>
      </nav>
    </header>
  )
}

export default Navbar
