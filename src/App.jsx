import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Navbar from './Components/Navbar/Navbar'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'


function App() {




  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
