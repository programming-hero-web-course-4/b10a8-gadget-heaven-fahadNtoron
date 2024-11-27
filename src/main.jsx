import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer position="top-center" 
      autoClose={2000} />
  </StrictMode>
);
