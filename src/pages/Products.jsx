import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import Spinner from '../components/Spinner/Spinner';
import { useStateContext } from '../context/StateContext'

const products = () => {
    const {state:{products,cart}} = useStateContext();
    // const [products,setProducts] = useState([]);

    // useEffect(()=>{
    //     setProducts(productsList)
    // },[productsList])

  return (
    <div className='flex flex-wrap gap-10 justify-center my-10'>
        {products.length> 0 ?products?.map(product=> <Cards key={product.id} product={product}/>): <Spinner/>}
    </div>
  )
}

export default products