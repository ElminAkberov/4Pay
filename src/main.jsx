import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./pages/Withdraws/Create/Create.jsx";
import List from "./pages/Withdraws/List/List.jsx";
import Download from "./pages/Withdraws/Download/Download.jsx";
import CreateProject from "./pages/Projects/CreateProject/CreateProject.jsx";
import Project from "./pages/Projects/Project/Project.jsx";
import Payment from "./pages/Payments/Payment/Payment.jsx";
import PaymentDownload from "./pages/Payments/PaymentDownload/PaymentDownload.jsx";
import Appeals from "./pages/Payments/Appeals/Appeals.jsx";
import PaymentCreate from "./pages/Payments/PaymentCreate/PaymentCreate.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/withdraws/create/", element: <Create /> },
      { path: "/withdraws/list/", element: <List /> },
      { path: "/withdraws/download", element: <Download /> },
      { path: "/projects/create", element: <CreateProject /> },
      { path: "/projects/", element: <Project /> },
      { path: "/payments/", element: <Payment /> },
      { path: "/payments/download/", element: <PaymentDownload /> },
      { path: "/appeals/", element: <Appeals /> },
      { path: "/payments/create/", element: <PaymentCreate /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
