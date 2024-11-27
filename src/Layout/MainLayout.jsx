import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import laptopFav from "../assets/laptopFav.jpeg"
import homeFav from "../assets/XOsX.gif"
import phoneFav from "../assets/phoneFAv.jpeg"
import watchFav from "../assets/watchFAv.jpeg"
import defaultFav from "../assets/XOsX.gif"
import staFav from "../assets/staFAv.jpg"
import policyFav from "../assets/polFav.jpeg"
import wishFAv from "../assets/wishFav.png"
import cartFav from "../assets/cartFav.png"
import dahsFav from "../assets/staFAv.jpg"
import macFav from "../assets/macFav.jpeg"
import accFav from "../assets/accFav.jpeg"
const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === '/';
  const laotop = location.pathname === '/laptop'
  const Phone = location.pathname === '/phone'
  const Smart = location.pathname === '/smart%20watch'
  const acc = location.pathname === '/accessories'
  const mac = location.pathname === '/macbook'
  const dash = location.pathname === '/Dashboard'
  const car = location.pathname === '/Dashboard/cart'
  const wis = location.pathname === '/Dashboard/wish'
  const sta = location.pathname === '/statistics'
  const pol = location.pathname === '/polices'
  const setFavicon = (iconPath) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = iconPath;
    document.getElementsByTagName("head")[0].appendChild(link);
  };
  const setTitle = () => {

    if(home){
      document.title ='Home-Gadget Sea';
      setFavicon(homeFav)

      
    }
    else if(laotop){
      document.title ='Laptop-Gadget Sea';
      setFavicon(laptopFav)

      
    }
    else if(Phone){
      document.title ='Phone-Gadget Sea';
      setFavicon(phoneFav)

      
    }
   else if(Smart){
      document.title ='Watch-Gadget Sea';
      setFavicon(watchFav)

      
    }
    else if(acc){
      document.title ='Accosories-Gadget Sea';
      setFavicon(accFav)

      
    }
    else if(mac){
      document.title ='Macbook-Gadget Sea';
      setFavicon(macFav)

      
    }
   else if(dash){
      document.title ='DashBoard-Gadget Sea';
      setFavicon(dahsFav)

      
    }
   else if(car){
      document.title ='CartList-Gadget Sea';
      setFavicon(cartFav)

      
    }
   else if(wis){
      document.title ='WishList-Gadget Sea';
      setFavicon(wishFAv)

      
    }
    else if(pol){
      document.title ='Policies-Gadget Sea';
      setFavicon(policyFav)

      
    }
    else if(sta){
      document.title ='Statistics-Gadget Sea';
      setFavicon(staFav)

      
    }
    else{
      document.title ='Gadget Sea';
      setFavicon(defaultFav)

      
    }

  };
  setTitle();
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-[calc(100vh-286px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
