import React from "react";
import NoProduct from '../assets/XOsX.gif'
import { NavLink } from "react-router-dom";

const NoAv = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={NoProduct}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">No product available here</h2>
          <p>Clic to explore all product</p>
          <div className="card-actions justify-end">
            <NavLink to={'/'} className="btn btn-primary">All Products</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAv;
