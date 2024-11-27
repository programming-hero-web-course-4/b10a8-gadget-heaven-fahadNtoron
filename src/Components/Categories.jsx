import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css"


const Categories = ({Catas}) => {
  return (
    <div>
      <div className="bg-white px-3 py-8  flex flex-col gap-3 ml-16 mb-8 items-center rounded-3xl">
        <NavLink to="/"  className="btn w-36">All Products</NavLink>
        {Catas.map(category => (
          <NavLink to={`${category.category.toLowerCase()}`} key={category.category} className="btn w-36">
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
