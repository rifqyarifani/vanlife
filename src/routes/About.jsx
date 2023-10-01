import React from "react";
import hero from "../assets/hero-about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <img src={hero} alt="" className=" w-4/6 mx-auto" />
      <div className=" w-4/6 mx-auto p-8 text-[#161616] flex flex-col justify-around gap-8">
        <h2 className=" text-4xl font-bold">
          Don't squeeze in a sedan when you could relax in a van.
        </h2>
        <p className=" text-xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra)
        </p>
        <p className=" text-xl">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className=" flex flex-col items-start p-6 text-[#161616] bg-[#FFCC8D] rounded-lg">
          <h3 className=" text-2xl font-bold">Your destination is waiting.</h3>
          <h3 className=" text-2xl font-bold">Your van is ready.</h3>
          <Link to="/vans">
            <button className=" text-white bg-black p-3 rounded-2xl mt-6">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
