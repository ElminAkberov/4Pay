import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import WithdrawRoutes from "./WithdrawRoutes";
import ProjectRoutes from "./ProjectRoutes";
import PaymentRoutes from "./PaymentRoutes";
import BalaceRoutes from "./RefillsRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      ...BalaceRoutes,
      ...WithdrawRoutes,
      ...ProjectRoutes,
      ...PaymentRoutes,
    ],
  },
]);

export default router;
