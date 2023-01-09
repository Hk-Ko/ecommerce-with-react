import React from 'react'
import {FaSearch,FaShoppingCart,FaShopify} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
    const {search,setSearch,state:{cart}} = useStateContext();
  return (
    <nav className='flex items-center justify-between bg-gray-50 shadow-md px-5 py-2 my-5 rounded'>
        <Link to='/'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <FaShopify className='text-4xl text-buttom'/>
                <h1 className='text-xl uppercase tracking-wider font-semibold text-header'>mms-shop</h1>
            </div>
        </Link>
        <div className='flex items-center gap-3'>
            <Link to={'/cart'}>
                <div className='flex items-center gap-2 bg-buttom px-4 py-2 rounded'>
                        <FaShoppingCart/>
                        <small>
                            {cart.length}
                        </small>
                </div>
          </Link>
            <div className='flex items-center gap-2 rounded px-3 py-1'>
                <FaSearch/>
                <input value={search} onChange={e=> setSearch(e.target.value)} type="text" className='outline-none bg-transparent' placeholder='Search...' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar