import React from "react";
import { Link } from "react-router-dom";

const VansList = ({ imageUrl, name, price, type, id, search, typeFilter }) => {
  const typeColor =
    type === "simple"
      ? "bg-[#E17654]"
      : type === "rugged"
      ? "bg-[#115E59]"
      : "bg-[#161616]";

  return (
    <>
      <div className=" w-full flex flex-col gap-2 ">
        <Link to={`${id}`} state={{ search: search, type: typeFilter }}>
          <img
            src={imageUrl}
            alt={name}
            className=" rounded-lg cursor-pointer"
          />
        </Link>
        <div className=" flex justify-between text-xl font-medium ">
          <h1 className=" cursor-pointer">
            <Link to={`/vans/${id}`}>{name}</Link>
          </h1>
          <h2>
            {`$${price}`}
            <span className=" text-xs font-normal">/day</span>
          </h2>
        </div>
        <h3
          className={` w-1/3 text-center capitalize font-semibold py-2 rounded-lg text-[#FFEAD0] ${typeColor}`}
        >
          {type}
        </h3>
      </div>
    </>
  );
};

export default VansList;
