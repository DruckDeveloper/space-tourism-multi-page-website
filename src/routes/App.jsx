// ROUTER DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// PAGES
import { Home } from '../pages/home/Home'
import { Destination } from '../pages/destination/Destination'
import { Crew } from '../pages/crew/Crew'
import { Technology } from '../pages/technology/Technology'
// COMPONENTS
import { Header } from '../components/header/Header'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Destination />} path='/destination' />
          <Route element={<Crew />} path='/crew' />
          <Route element={<Technology />} path='/technology' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
