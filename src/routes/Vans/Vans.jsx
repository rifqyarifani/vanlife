import React, { useState, useEffect } from "react";
import VansList from "../../components/VansList";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <>
      <div className=" w-4/6 mx-auto p-8 pt-16 text-[#161616] flex flex-col justify-around gap-8 bg-[#FFF7ED]">
        <h1 className="text-3xl font-bold">Explore our van options</h1>
        <div className=" flex flex-row justify-between items-center text-[#4D4D4D]">
          <ul className=" flex justify-between gap-8 ">
            <li className="px-6 py-2 bg-[#FFEAD0] rounded-lg">Simple</li>
            <li className="px-6 py-2 bg-[#FFEAD0] rounded-lg">Luxury</li>
            <li className="px-6 py-2 bg-[#FFEAD0] rounded-lg">Rugged</li>
          </ul>
          <p className=" underline">Clear filters</p>
        </div>
        <div className=" grid grid-cols-2 gap-8">
          {Object.keys(vans).length > 0 &&
            vans.map((van, index) => (
              <VansList
                key={index}
                imageUrl={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
                id={van.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Vans;
