import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const Cards = ({ product }) => {
  const { dispatch } = useStateContext();
  return (
    <div className="w-80 border-2 p-5 rounded-lg hover:shadow-xl transform transition hover:scale-105">
      <img src={product?.image} className="h-[200px]  mx-auto my-3" alt="" />
      <h3 className="text-header font-bold tracking-wider my-3">
        {product?.title?.substring(0, 25)}...
      </h3>
      <div className="flex items-center gap-1">
        <AiFillStar className="text-buttom" />
        <small className="text-header font-semibold">
          ({product?.rating?.rate})
        </small>
      </div>
      <p className="text-para font-bold text-xl my-3">${product?.price}</p>
      <div>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="bg-buttom text-primary px-5 py-2 rounded shadow-md transform transition hover:scale-90"
        >
          Add To Cart
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className="bg-header text-primary px-5 py-2 rounded shadow-md ml-3 transform transition hover:scale-90">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
