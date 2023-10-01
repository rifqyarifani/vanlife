import React from "react";
import { Link } from "react-router-dom";

const HostVansList = ({ id, name, imageUrl, price }) => {
  return (
    <>
      <div className=" flex justify-between items-center bg-white rounded-lg p-6">
        <div className=" flex gap-4 items-center">
          <img
            src={imageUrl}
            alt={name}
            className=" w-20 rounded-lg bg-cover"
          />
          <div>
            <h1 className=" text-2xl font-semibold">{name}</h1>
            <h2 className=" text-xl">{`$${price}/day`}</h2>
          </div>
        </div>
        <Link to={`/host/vans/${id}`}>
          <p>Edit</p>
        </Link>
      </div>
    </>
  );
};

export default HostVansList;
