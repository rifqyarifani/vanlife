import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" w-4/6 mx-auto flex justify-between p-8 bg-[#FFF7ED] items-center">
        <h1 className=" text-3xl font-bold">#VANLIFE</h1>
        <ul className=" flex gap-4 text-[#4D4D4D] text-xl">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Vans</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
