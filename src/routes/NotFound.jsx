import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className=" w-4/6 mx-auto p-8 text-[#161616] flex flex-col justify-around py-40 gap-8 bg-[#FFF7ED]">
        <h2 className=" text-4xl font-bold">
          Sorry, the page you were looking for was not found.
        </h2>
        <Link to=".">
          <button className=" bg-[#161616] text-white font-semibold text-xl p-4 rounded-lg w-full">
            Return to home
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
