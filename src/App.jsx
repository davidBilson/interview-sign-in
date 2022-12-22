import { Route, Routes } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'
import Home from './Components/HomePage/Home'
import Navbar from './Components/Navbar/Navbar'
import './index.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='checkout' element={<Checkout />} />
    </Routes>
    </>
  )
}

export default App
