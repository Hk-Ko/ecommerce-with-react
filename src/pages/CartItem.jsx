import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useStateContext } from '../context/StateContext';
import {AiFillMinusSquare,AiFillPlusSquare} from 'react-icons/ai'

const CartItem = ({item,increasePrice,decreasePrice}) => {
    const {dispatch} = useStateContext();
    const [qty,setQty] = useState(1);
    const increaseQty = ()=>{
        setQty((prev) => prev + 1)
        increasePrice(item.price)
    }


    const decreaseQty =()=>{
        if (qty > 1) {
            setQty((prev)=> prev - 1)
            decreasePrice(item.price)
        }
    }

    const removeHandler = ()=>{
        decreasePrice(item?.price * qty)
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }

  return (
    <div className="flex items-start gap-4" key={item.id}>
        <img
        src={item?.image}
        className="h-32 w-28 border-2 rounded p-4"
        alt=""
        />
        <div className="">
            <h3 className='text-2xl font-semibold'>{item?.title}</h3>
            <p className='text-secondary font-bold text-3xl my-3'>${item?.price * qty}</p>
            <div className="flex items-center gap-3">
                <AiFillMinusSquare onClick={decreaseQty} className='text-3xl text-red-600 cursor-pointer'/>
                <p className="text-xl">{qty}</p>
                <AiFillPlusSquare onClick={increaseQty} className='text-3xl text-green-600 cursor-pointer'/>
                <AiFillDelete  onClick={removeHandler} className="text-red-500 text-2xl" />
            </div>
        </div>
    </div>
  )
}

export default CartItem