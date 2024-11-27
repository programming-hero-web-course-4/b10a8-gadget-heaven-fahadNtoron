import React, { useState } from "react";
import { AiFillShopping } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { NavLink, useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";
import './Nav.css'
import Dashboard from './../Pages/Dashboard';

const Nav = () => {
  const location = useLocation();
  const home = location.pathname === '/';
  const laotop = location.pathname === '/laptop'
  const Phone = location.pathname === '/phone'
  const Smart = location.pathname === '/smart%20Watch'
  const acc = location.pathname === '/accessories'
  const mac = location.pathname === '/macBook'

  return (
    <div>
      <nav>
        <div className={home || laotop || Phone || Smart || acc || mac ? 'ok flex justify-between p-1 -mb-5 max-w-[1540px] mx-5  rounded-3xl': 'navbar bg-base-100'}>
          <div className="navbar-start mb-5">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/"} className={""}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/statistics"}>
                    Statistic
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Dashboard"}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/polices'}>
                   Polices
                  </NavLink>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Gadget Sea</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-2">
              <li>
                <NavLink to={"/"} className={""}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/statistics"}>
                  Statistic
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Dashboard"}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to={'/polices'}>
                  Polices
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex">
            <NavLink to={'/Dashboard/cart'} className="btn">
              <AiFillShopping />
            </NavLink>
            <NavLink to={'/Dashboard/wish'} className="btn">
              <AiFillHeart />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
