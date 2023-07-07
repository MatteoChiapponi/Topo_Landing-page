import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import { routes } from './assets/routes'
import Home from './pages/home/home'
import AboutUs from './pages/about-us/AboutUs'
import OurProyects from './pages/our-proyects/OurProyects'
import OurServices from './pages/our-services/OurServices'
function App() {
  return (
    <div className='dark'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {<Route path={routes.home} element={<Home />} />}
          {<Route path={routes.aboutUs} element={<AboutUs />} />}
          {<Route path={routes.ourProyects} element={<OurProyects />} />}
          {<Route path={routes.ourServices} element={<OurServices />} />}
          <Route path={'*'} element={<h1>pagina no encontrada</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
