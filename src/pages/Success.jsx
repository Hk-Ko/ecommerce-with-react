import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="bg-secondary p-10 rounded shadow-lg  mt-20 animate__animated animate__backInDown">
        <h1 className="text-header text-4xl font-bold my-5">
          Thanks for purchasing..
        </h1>
        <button
          onClick={() => navigate("/")}
          className="bg-buttom text-primary font-semibold px-3 py-1 rounded shadow-lg tansfrom transition hover:scale-105"
        >
          Go to shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
