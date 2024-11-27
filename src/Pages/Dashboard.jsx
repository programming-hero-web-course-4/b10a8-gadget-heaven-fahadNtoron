import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Dash.css";

const Dashboard = () => {
  const ok = useLocation();
  const okk = ok.pathname === '/Dashboard'
  
  return (
    <div className="text-black">
      <div>
        <div className="max-w-[1540px] banner  h-[300px] mr-0 px-8 py-16 pb-32 mb-9">
          <h2 className="text-4xl text-center">DashBoard</h2>
          <p className="text-center m-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center gap-4">
            {" "}
            <NavLink to={"/Dashboard/cart"} className={`${okk ? 'active btn btn-outline px-9 ok': 'btn btn-outline px-9 ok'}`}>
              Cart
            </NavLink>{" "}
            <NavLink to={"/Dashboard/wish"} className={"btn btn-outline px-7 ok"}>
              WishLIst
            </NavLink>{" "}
          </div>
        </div>
      </div>
      <div className=""> 
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default Dashboard;
