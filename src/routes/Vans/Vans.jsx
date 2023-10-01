import React, { useState, useEffect } from "react";
import VansList from "../../components/VansList";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [search, setSearch] = useSearchParams();

  const typeFilter = search.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <>
      <div className=" w-4/6 mx-auto p-8 pt-16 text-[#161616] flex flex-col justify-around gap-8 bg-[#FFF7ED]">
        <h1 className="text-3xl font-bold">Explore our van options</h1>
        <div className=" flex flex-row justify-between items-center text-[#4D4D4D]">
          <ul className=" flex justify-between gap-8 ">
            <Link to="?type=simple">
              <li
                className={`px-6 py-2 bg-[#FFEAD0] hover:bg-[#E17654] hover:text-white hover:underline rounded-lg ${
                  typeFilter === "simple" ? "bg-[#E17649] text-white" : ""
                }`}
              >
                Simple
              </li>
            </Link>
            <Link to="?type=luxury">
              <li
                className={`px-6 py-2 bg-[#FFEAD0] hover:bg-[#161616] hover:text-white hover:underline rounded-l ${
                  typeFilter === "luxury" ? "bg-[#161609] text-white" : ""
                }`}
              >
                Luxury
              </li>
            </Link>
            <Link to="?type=rugged">
              <li
                className={`px-6 py-2 bg-[#FFEAD0] hover:bg-[#115E59] hover:text-white hover:underline rounded-lg ${
                  typeFilter === "rugged" ? "bg-[#115E49] text-white" : ""
                }`}
              >
                Rugged
              </li>
            </Link>
          </ul>
          {typeFilter && (
            <Link to=".">
              <p className=" hover:underline hover:text-black">Clear filters</p>
            </Link>
          )}
        </div>
        <div className=" grid grid-cols-2 gap-8">
          {Object.keys(filteredVans).length > 0 &&
            filteredVans.map((van, index) => (
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
