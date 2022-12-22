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
      <Route exact path='/{interview-app}' element={<Home />} />
      <Route exact path='checkout' element={<Checkout />} />
    </Routes>
    </>
  )
}

export default App
