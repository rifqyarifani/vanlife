import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logog.png";
import { HiUser } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <div className=" w-4/6 mx-auto flex justify-between p-8 bg-[#FFF7ED] items-center">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="Logo" className=" w-48" />
        </NavLink>
        <ul className=" flex gap-4 text-[#4D4D4D] text-xl">
          <li className=" hover:underline">
            <NavLink
              to="/host"
              className={({ isActive }) =>
                isActive ? " font-bold underline text-[#161616]" : ""
              }
            >
              Host
            </NavLink>
          </li>
          <li className=" hover:underline">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? " font-bold underline text-[#161616]" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className=" hover:underline">
            <NavLink
              to="/vans"
              className={({ isActive }) =>
                isActive ? " font-bold underline text-[#161616]" : ""
              }
            >
              Vans
            </NavLink>
          </li>
          <li className=" hover:underline text-2xl rounded-full border-2 border-[#161616] ">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? " font-bold underline text-[#161616]" : ""
              }
            >
              <HiUser className=" text-[#161616]" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
