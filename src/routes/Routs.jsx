import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./../Layout/MainLayout";
import { Children } from "react";
import Home from "../Pages/Home";
import Statistics from "./../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Policy from "../Pages/Policy";
import HomeCata from "../Pages/HomeCata";
import Banner from "../Components/Banner";
import ErrorNoItem from "../Components/ErrorNoItem";
import Detailed from "../Pages/Detailed";
import NoAv from "../Components/NoAv";
import DashCart from "../Pages/DashCart";
import DashWish from "../Pages/DashWish";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Catas.json"),
        children: [
          {
            path: ":userId",
            element: <HomeCata></HomeCata>,
            errorElement: <NoAv></NoAv>,
            loader: ({ params }) => fetch(`/${params.userId}data.json`),
          },
          {
            path: "/",
            element: <HomeCata></HomeCata>,
            errorElement: <ErrorNoItem></ErrorNoItem>,
            loader: () => fetch("/gadgetdata.json"),
          },
        ],
      },
      {
        path: "/product/:id",
        element: <Detailed></Detailed>,
        loader: () => fetch(`/gadgetdata.json`),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/gadgetdata.json'),
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true, // This sets DashCart as the default child
            element: <DashCart></DashCart>,
            loader: () => fetch("/gadgetdata.json"),
          },
          {
            path: "cart",
            element: <DashCart></DashCart>,
            loader: () => fetch("/gadgetdata.json"),
          },
          {
            path: "wish",
            element: <DashWish></DashWish>,
            loader: () => fetch("/gadgetdata.json"),
          },
        ],
      },
      {
        path: "/polices",
        element: <Policy></Policy>,
        loader: ()=> fetch('/poldata.json')
      },
    ],
  },
]);

export default routes;
