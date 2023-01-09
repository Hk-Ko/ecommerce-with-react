import React from 'react'
import './style.css'
import {Routes,Route} from 'react-router-dom'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Success from './pages/Success'
import 'animate.css';
import Spinner from './components/spinner/Spinner'

const App = () => {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/detail/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App