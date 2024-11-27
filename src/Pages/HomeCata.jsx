import React from "react";
import { NavLink, useActionData, useLoaderData, useParams } from "react-router-dom";

const HomeCata = () => {
  const data = useLoaderData();
  const { product_title, product_image, price } = data;
  const okk = useParams();
  console.log(okk)
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center">
        {data.map((ok) => (
          <div key={ok.product_id} className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={ok.product_image} alt="laptop" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{ok.product_title}</h2>
              <p> {ok.price} </p>
              <div className="card-actions">
                <NavLink to={`/product/${ok.product_id}`} className={"btn btn-primary"}>
                  Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCata;
