import { toast } from "react-toastify";

const getCartList = () => {
  const cartStr = localStorage.getItem("cart");
  if (cartStr) {
    const cartList = JSON.parse(cartStr);
    return cartList;
  } else {
    return [];
  }
};


const addToCart = (id) => {
  const cartList = getCartList();
  if (cartList.includes(id)) {
    return false;
  }
   else {
    cartList.push(id);
    const cartStr = JSON.stringify(cartList);
    localStorage.setItem("cart", cartStr);
    return true;
  }
};
const getWishList = () => {
  const wishStr = localStorage.getItem("wish");
  if (wishStr) {
    const wishList = JSON.parse(wishStr);
    return wishList;
  } else {
    return [];
  }
};

const addToWish = (id) => {
  const wishList = getWishList();
  if (wishList.includes(id)) {
    return true;
  } else {
    wishList.push(id);
    const wishStr = JSON.stringify(wishList);
    localStorage.setItem("wish", wishStr);
  }
};

export { getCartList, addToCart, addToWish, getWishList };
