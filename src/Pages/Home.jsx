import React, { useEffect } from "react";
import "./Home.css";
import banner from "../assets/banner.jpg";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
  const Catas = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-5 grid-cols-1">
      <Categories Catas={Catas}></Categories>
      <div className="lg:col-span-4 justify-center"><Outlet></Outlet></div>
      </div>
    </div>
  );
};

export default Home;
