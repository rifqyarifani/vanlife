import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className=" w-4/6 mx-auto p-8 bg-[url('./assets/hero-home.png')] bg-cover h-96 text-white flex flex-col justify-around">
        <h2 className=" text-5xl font-bold">
          You got the travel plans, we got travel vans.
        </h2>
        <p className=" text-xl">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className=" text-2xl font-semibold bg-[#FF8C38] w-full py-4 rounded-lg">
          Find Your Van
        </button>
      </div>
      <Footer />
    </>
  );
};

export default App;
