import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

const [total,setTotal] = useState(0)

  const navigate = useNavigate();
  const checkoutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/success");
  };

const increasePrice =(price)=>{
    setTotal(total + price)
}

const decreasePrice =(price)=>{
    setTotal(total - price)
}

useEffect(()=>{
    setTotal(cart.reduce((initial,current)=> initial + current.price,0))
},[])

  return (
    <>
      {cart.length > 0 ? (
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-5 col-span-3">
            {cart?.map((item) => (
              <CartItem key={item.id} item={item} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
            ))}
          </div>
          <div className="col-span-1">
            <div className="bg-secondary p-10 rounded shadow-lg">
              <h1 className="text-header text-3xl font-semibold ">
                ${(total).toFixed(2)}
              </h1>
              <button
                onClick={checkoutHandler}
                className="bg-buttom text-primary px-5 py-2 rounded shadow-lg uppercase my-5"
              >
                check out
              </button>
            </div>
            <div className="">
              <button
                onClick={() => dispatch({ type: "CART_EMPTY" })}
                className="bg-red-600 text-primary px-5 py-2 rounded shadow-lg uppercase my-5"
              >
                Cart empty
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
            <div className="bg-secondary p-10 rounded shadow-lg  mt-20 animate__animated animate__backInDown">
            <h1 className="text-header text-4xl font-bold my-5">
                Your cart is empty...
            </h1>
            <button
                onClick={() => navigate("/")}
                className="bg-buttom text-primary font-semibold px-3 py-1 rounded shadow-lg tansfrom transition hover:scale-105"
            >
                Go to shopping
            </button>
            </div>
        </div>
      )}
    </>
  );
};

export default Cart;
