import React from 'react';
import { useEffect, useState } from "react";
import { getCartList, getWishList } from "../Storage/Cart";
import { useLoaderData } from "react-router-dom";

const DashWish = () => {const allProduct = useLoaderData();
    const [ok, setOk] = useState([]);
    const [dep, setDep] = useState(true);

    const handleDelete = (id) =>{
      const cart = getWishList();
      const neww = cart.filter(ok => ok !== id);
      const str = JSON.stringify(neww);
      localStorage.setItem('wish', str);
      setDep(!dep);
  
      };

    useEffect(() => {
      const wish = getWishList();
      const wishInt = wish.map((id) => parseInt(id));
  
      const wishProduct = allProduct.filter((pro) =>
        wishInt.includes(pro.product_id)
      );
      setOk(wishProduct);
    }, [dep]);
    return (
      <div className=" mx-5">
        <div className="flex justify-between">
          <h1 className='text-3xl font-bold'>WishList</h1>
        </div>
        <div className="mt-5">
          {ok.map((product) => (
            <div key={product.product_id} className="mb-4 shadow-2xl">
              <div className="card card-side bg-gray-300 shadow-xl p-5">
                <figure className="h-48 rounded-2xl w-56">
                  <img
                    className="h-full w-full object-fill"
                    src={product.product_image}
                    alt="Laptop Pictrue"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.product_title}</h2>
                  <p>{product.description}.</p>
                  <p>{product.price}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleDelete(product.product_id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default DashWish;