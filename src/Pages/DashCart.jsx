import React, { useEffect, useState } from "react";
import { addToCart, getCartList } from "../Storage/Cart";
import { useLoaderData, useNavigate } from "react-router-dom";
import modTnx from "../assets/thanksMOdal.gif"

const DashCart = () => {
  let nevigate = useNavigate();
  console.log(nevigate);
  const allProduct = useLoaderData();
  const [ok, setOk] = useState([]);
  const [cost, setCost] = useState(0);
  const [dep, setDep] = useState(true);
  const handleDelete = (id) => {
    const cart = getCartList();
    const neww = cart.filter((ok) => ok !== id);
    const str = JSON.stringify(neww);
    localStorage.setItem("cart", str);
    setDep(!dep);
  };
  const [sorted, setSorted] = useState(allProduct);
  const [sCart, setScart] = useState();
  const [purc, setPurcs] = useState(false)

  const handleSort = () => {
    const sort = [...allProduct].sort((a, b) => b.price - a.price);
    setSorted(sort);
    setDep(!dep);
  };
  const handleConfirm =()=>{
    const neww = [];
    const str = JSON.stringify(neww);
    localStorage.setItem("cart", str);
    setDep(!dep);


  };
  const handleCOnfirm2 = ()=>{
    nevigate('/');
  }

  useEffect(() => {
    const cart = getCartList();
    const cartInt = cart.map((id) => parseInt(id));
    const cartProduct = sorted.filter((pro) =>
      cartInt.includes(pro.product_id)
    );
    const prices = cartProduct.map((ok) => ok.price);
    const sum = prices.reduce((a, b) => a + b, 0);
    const rnd = Math.round(sum * 100) / 100;
    setCost(rnd);
    setOk(cartProduct);
    console.log(cart)
    if(cart.length === 0){ 
      setPurcs(false)

    }
    else{
      setPurcs(true)
    };
    console.log(purc)
  }, [dep]);

  return (
    <div className=" mx-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">CartList</h1>
        <div className="flex justify-center gap-2 items-center">
          <h1>Total cost : {cost} </h1>
          <button onClick={() => handleSort()} className="btn">
            Sort by price
          </button>
          <button
            className={`btn ${purc ? '':'btn-disabled'}`}
            onClick={() => {
              document.getElementById("Purchase").showModal();
              handleConfirm();
            }}
          >
            Purchase
          </button>
        </div>
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
                    className={`btn btn-primary`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog id="Purchase" className="modal">
        <div className="modal-box flex items-center flex-col w-96 justify-center">
          <img className="rounded-xl" src={modTnx} alt="" />
          <h3 className="font-bold text-lg">Take Love</h3>
          <p className="py-4">
           Thanks for being with us
          </p>
          <div className="modal-action">
            <form method="dialog" className="">
              <button onClick={handleCOnfirm2} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default DashCart;
