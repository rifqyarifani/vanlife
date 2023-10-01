import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const DetailVansHost = () => {
  const [vans, setVans] = useState([]);
  const { id } = useParams();

  const typeColor =
    vans.type === "simple"
      ? "bg-[#E17654]"
      : vans.type === "rugged"
      ? "bg-[#115E59]"
      : "bg-[#161616]";

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <>
      <>
        <div className="w-4/6 mx-auto flex flex-col gap-8 px-8 py-16 bg-[#FFF7ED]">
          <Link
            to=".."
            relative="path"
            className="flex items-center gap-2 text-xl"
          >
            <AiOutlineArrowLeft />
            <p className=" underline">Back to all vans</p>
          </Link>
          <div className=" flex flex-col gap-8 bg-white p-8">
            <div className=" flex gap-6 items-center">
              <img
                src={vans.imageUrl}
                alt={vans.name}
                className=" rounded-lg w-5/12"
              />
              <div className=" flex flex-col gap-4">
                <h3
                  className={` w-fit text-center capitalize font-semibold py-2 px-4 text-xl rounded-lg text-[#FFEAD0] ${typeColor}`}
                >
                  {vans.type}
                </h3>
                <h1 className=" text-3xl font-bold">{vans.name}</h1>
                <h3 className=" font-bold text-3xl">
                  {`$${vans.price}`}
                  <span className=" font-normal">/day</span>
                </h3>
              </div>
            </div>
            <div>
              <ul className=" flex gap-10 text-[#4D4D4D] text-xl">
                <li className=" hover:underline">
                  <NavLink
                    to={`/host/vans/${id}`}
                    className={({ isActive }) =>
                      isActive ? " font-bold underline text-[#161616]" : ""
                    }
                    end
                  >
                    Details
                  </NavLink>
                </li>
                <li className=" hover:underline">
                  <NavLink
                    to={`/host/vans/${id}/pricing`}
                    className={({ isActive }) =>
                      isActive ? " font-bold underline text-[#161616]" : ""
                    }
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className=" hover:underline">
                  <NavLink
                    to={`/host/vans/${id}/photos`}
                    className={({ isActive }) =>
                      isActive ? " font-bold underline text-[#161616]" : ""
                    }
                  >
                    Photos
                  </NavLink>
                </li>
              </ul>
            </div>
            <Outlet context={{ vans }} />
          </div>
        </div>
      </>
    </>
  );
};

export default DetailVansHost;
