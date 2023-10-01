import React, { useState, useEffect } from "react";
import HostVansList from "../../components/HostVansList";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <>
      <div className="w-4/6 mx-auto flex flex-col gap-8 bg-[#FFF7ED]">
        <div className=" flex flex-col p-8 gap-6">
          <div className=" flex justify-between items-center">
            <h1 className=" text-3xl font-semibold">Your listed vans</h1>
          </div>
          {Object.keys(vans).length > 0 &&
            vans.map((van, index) => (
              <HostVansList
                name={van.name}
                imageUrl={van.imageUrl}
                price={van.price}
                id={van.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Vans;
