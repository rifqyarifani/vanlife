import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

const VanDetail = () => {
  const { vans } = useOutletContext();
  const typeColor =
    vans.type === "simple"
      ? "bg-[#E17654]"
      : vans.type === "rugged"
      ? "bg-[#115E59]"
      : "bg-[#161616]";

  return (
    <>
      <div className=" flex flex-col gap-4">
        <p className=" text-xl">
          <span className=" font-bold">Name:</span> {vans.name}
        </p>
        <p className=" text-xl capitalize">
          <span className=" font-bold">Category:</span> {vans.type}
        </p>
        <p className=" text-xl">
          <span className=" font-bold">Description:</span> {vans.description}
        </p>
        <p className=" text-xl">
          <span className=" font-bold">Visibility:</span> Public
        </p>
      </div>
    </>
  );
};

export default VanDetail;
