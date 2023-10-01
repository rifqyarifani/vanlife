import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVansPhotos = () => {
  const { vans } = useOutletContext();
  return (
    <img src={vans.imageUrl} alt={vans.name} className=" w-2/6 rounded-xl" />
  );
};

export default HostVansPhotos;
