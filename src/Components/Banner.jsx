import React from "react";
import "../Pages/Home.css";
import banner from "../assets/banner.jpg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="max-w-[1540px] banner h-[700px]  md:h-[600px] rounded-3xl m-auto mx-5 px-8 py-16 pb-32 -mb-20">
        <h2 className="text-4xl text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-center m-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center">
          <NavLink to={"/Dashboard"}>
            <button className="btn btn-outline">Shop Now</button>
          </NavLink>
        </div>
      </div>
      <div className="md:mx-36  z-10 border-4 mx-4 border-white  backdrop-blur-sm bg-white/40 p-6 solid rounded-3xl relative -top-48">
        <img className="rounded-2xl" src={banner} alt="" />
      </div>

      <h1 className="text-4xl text-center -mt-40 mb-6">
        Explore Cutting-Edge Gadgets
      </h1>
    </div>
  );
};

export default Banner;
