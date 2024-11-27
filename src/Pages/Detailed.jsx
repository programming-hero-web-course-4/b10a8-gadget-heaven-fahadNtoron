import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import {
  addToCart,
  addToWish,
  getCartList,
  getWishList,
} from "../Storage/Cart";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";

const Detailed = () => {
  const { id } = useParams();
  const prodId = id;
  const idInt = parseInt(id);
  const [click, setClick] = useState(true);

  const data = useLoaderData();
  const [exist, setExist] = useState();
  const [exW, setExW] = useState();
  const addeNoti = (Name, id) =>
    toast.success(`${Name} has been added to ${id}`);
  const wishlist = "WishList";
  const cartLIat = "cartList";

  useEffect(() => {
    const cart = getCartList();
    const chack = cart.find((item) => item == idInt);
    if (chack) {
      setExist(true);
    } else {
      setExist(false);
    }
    const wish = getWishList();
    const checkW = wish.find((item) => item == idInt);
    if (checkW) {
      setExW(true);
    } else {
      setExW(false);
    }
  }, [click]);

  const ok = data.find((item) => item.product_id == prodId);
  const { availability } = ok;

  // handle cart and wishlist
  const handleCart = (productId) => {
    addToCart(productId);
    setClick(!click);
  };

  const handleWish = (prodId) => {
    setClick(!click);
    addToWish(prodId);
  };
  return (
    <div className="mt-3">
      <div>
        <div className="max-w-[1540px] banner  h-[400px] mr-0 px-8 py-16 pb-32 -mb-20">
          <h2 className="text-4xl text-center">Product Details</h2>
          <p className="text-center m-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="card card-side bg-base-100 shadow-xl -mt-24 h-[500px] justify-around items-center max-w-[1200px] p-7 gap-3">
            <figure className="md:h-full">
              <img className="h-full" src={ok.product_image} />
            </figure>
            <div className="flex flex-col text-start">
              <h2 className="card-title">{ok.product_title}</h2>
              <p>Price : {ok.price}</p>
              {/* <p>{stock}</p> */}
              <p>{ok.description}</p>
              <h3 className="">Specification</h3>
              <ol>
                <li>{ok.Specification[0]}</li>
                <li>{ok.Specification[1]}</li>
                <li>{ok.Specification[2]}</li>
                <li>{ok.Specification[3]}</li>
              </ol>
              <p>Rating: {ok.rating}<ReactStars
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    value={ok.rating}
    activeColor="#ffd700"
  />,</p>
              <div className="card-actions justify-start mt-5">
                <button
                  className={` ${
                    exist ? " btn btn-primary" : "btn-enabled btn btn-primary"
                  }`}
                  onClick={() => {
                    handleCart(ok.product_id);
                    addeNoti(ok.product_title, cartLIat);
                  }}
                >
                  Add too cart
                </button>
                <button
                  className={` ${
                    exW
                      ? "btn-disabled btn btn-primary"
                      : "btn-enabled btn btn-primary"
                  }`}
                  onClick={() => {
                    handleWish(ok.product_id);
                    addeNoti(ok.product_title, wishlist);
                  }}
                >
                  <AiFillHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
