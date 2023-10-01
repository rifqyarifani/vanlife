import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavbarHost = () => {
  return (
    <>
      <ul className=" w-4/6 mx-auto flex gap-6 text-xl font-medium p-8 bg-[#FFF7ED]">
        <li className=" hover:underline">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive ? " font-bold underline text-[#161616]" : ""
            }
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li className=" hover:underline">
          <NavLink
            to="/host/income"
            className={({ isActive }) =>
              isActive ? " font-bold underline text-[#161616]" : ""
            }
          >
            Income
          </NavLink>
        </li>
        <li className=" hover:underline">
          <NavLink
            to="/host/vans"
            className={({ isActive }) =>
              isActive ? " font-bold underline text-[#161616]" : ""
            }
          >
            Vans
          </NavLink>
        </li>
        <li className=" hover:underline">
          <NavLink
            to="/host/reviews"
            className={({ isActive }) =>
              isActive ? " font-bold underline text-[#161616]" : ""
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavbarHost;
