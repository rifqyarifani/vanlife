import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVansPricing = () => {
  const { vans } = useOutletContext();
  return (
    <h2 className=" text-3xl">
      {`$${vans.price}`}
      <span className=" text-xl font-normal text-[#4D4D4D]">/day</span>
    </h2>
  );
};

export default HostVansPricing;
