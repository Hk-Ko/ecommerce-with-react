import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../api";
import { AiFillStar } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { useStateContext } from "../context/StateContext";
import Spinner from "../components/Spinner/Spinner";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products,setProducts] = useState([]);
  const {dispatch} = useStateContext();

  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };

  const getProductCat = async ()=>{
    const data = await getData(`/products/category/${product.category}`)
    const filterData = data?.filter((item)=>item.id !== product.id)
    setProducts (filterData)
  }

  useEffect(() => {
    getProductDetail();
    getProductCat();
  }, [products,product]);

  return (
    <>
        {product && products.length>0?(   <div>
        <div className="flex gap-5 items-start">
            <img
            src={product?.image}
            className="h-96 border-2 shadow-lg p-10"
            alt=""
            />
            <div className="flex flex-col gap-5 mt-5">
            <p className="bg-buttom text-secondary font-bold px-2 py-2 text-xs rounded-full w-40 text-center">
                {product?.category}
            </p>
            <h3 className="text-2xl font-semibold text-header">
                {product?.title}
            </h3>
            <div className="">
                <p className="text-header font-semibold text-lg">Description</p>
                <p className="text-para text-sm tracking-wider leading-6 mt-1">
                {product?.description}
                </p>
            </div>
            <p className="flex items-center gap-2">
                <AiFillStar className="text-xl text-buttom " />
                <small className="text-para font-bold">
                ({product?.rating?.rate})
                </small>
            </p>
            <p className="text-header text-xl font-semibold">${product?.price}</p>
            <div className="">
                <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })} className="bg-buttom text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
                    Add To Cart
                </button>
                <Link to={'/success'}>
                    <button className="bg-header ml-3 text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
                        Buy Now
                    </button>
                </Link>
            </div>
            </div>
        </div>
        <div className="my-20">
            <h1 className="text-2xl font-semibold text-header">You may also like</h1>
            <div className="flex flex-wrap gap-7 my-10 text-center">
                {products?.map(item=>(
                <div key={item.id}>
                    <img src={item?.image} className='h-64 w-56 border-2 shadow-lg p-10 rounded mb-1' alt="" />
                    <p className="text-para font-semibold">${item?.price}</p>
                </div>))}
            </div>
        </div>
    </div>):<Spinner/>}
    </>
  );
};

export default ProductDetail;
