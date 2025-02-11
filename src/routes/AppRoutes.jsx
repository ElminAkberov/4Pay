import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import WithdrawRoutes from "./WithdrawRoutes";
import ProjectRoutes from "./ProjectRoutes";
import PaymentRoutes from "./PaymentRoutes";
import BalaceRoutes from "./RefillsRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/", 
    element: <App />, 
    children: [
      { path: "home", element: <HomePage /> }, 
      ...BalaceRoutes,
      ...WithdrawRoutes,
      ...ProjectRoutes,
      ...PaymentRoutes,
    ],
  },
]);

export default router;