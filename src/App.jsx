import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import { routes } from './assets/routes'
import Home from './pages/home/home'
import AboutUs from './pages/about-us/AboutUs'
import OurProjects from './pages/our-projects/OurProjects'
import OurServices from './pages/our-services/OurServices'
import { useGlobalStates } from './utils/global.context'

function App() {
  const { states } = useGlobalStates()
  return (
    <div className={states.theme ? 'dark' : 'light'}>
      <Routes>
        <Route path='/' element={<Layout />}>
          {<Route path={routes.home} element={<Home />} />}
          {<Route path={routes.aboutUs} element={<AboutUs />} />}
          {<Route path={routes.ourProjects} element={<OurProjects />} />}
          {<Route path={routes.ourServices} element={<OurServices />} />}
          <Route path={'*'} element={<h1>pagina no encontrada</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
