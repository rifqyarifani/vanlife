import React, { useState, useEffect } from "react";
import HostVansList from "../../components/HostVansList";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Host = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <>
      <div className="w-4/6 mx-auto flex flex-col bg-[#FFF7ED]">
        <div className=" flex flex-col gap-6 p-8 bg-[#FFEAD0] ">
          <h1 className=" text-4xl font-semibold">Welcome!</h1>
          <div className=" flex justify-between items-center">
            <p>
              Income last <span className=" underline">30 days</span>
            </p>
            <p>Details</p>
          </div>
          <h1 className=" text-5xl font-bold">$2,260</h1>
        </div>
        <div className=" flex justify-between items-center p-8 bg-[#FFDDB2] ">
          <div className=" flex gap-2 items-center">
            <h1 className=" text-3xl font-semibold">Review score</h1>
            <AiFillStar className=" text-2xl text-[#FF8C38]" />
            <p className=" text-xl font-semibold">
              5.0<span className=" font-light">/5</span>
            </p>
          </div>
          <p>Details</p>
        </div>
        <div className=" flex flex-col p-8 gap-6">
          <div className=" flex justify-between items-center">
            <h1 className=" text-3xl font-semibold">Your listed vans</h1>
            <p>
              <Link to="/host/vans">View all</Link>
            </p>
          </div>
          {Object.keys(vans).length > 0 &&
            vans.map(
              (van, index) =>
                index < 3 && (
                  <HostVansList
                    name={van.name}
                    imageUrl={van.imageUrl}
                    price={van.price}
                    id={van.id}
                  />
                )
            )}
        </div>
      </div>
    </>
  );
};

export default Host;
