import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/*<Route path={""} element={<Home />} />*/}
        {/*<Route path={""} element={<Contact />} />*/}
        {/*<Route path={""} element={<Dentist />} />*/}
        {/*<Route path={""} element={<Favs />} />*/}
        <Route path={'*'} element={<h1>pagina no encontrada</h1>} />
      </Route>
    </Routes>
  )
}

export default App
