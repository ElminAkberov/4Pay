import React from "react";
import Payment from "../pages/Payments/Payment/Payment";
import PaymentDownload from "../pages/Payments/PaymentDownload/PaymentDownload";
import Appeals from "../pages/Payments/Appeals/Appeals";
import PaymentCreate from "../pages/Payments/PaymentCreate/PaymentCreate";
import PaymentError from "../pages/Payments/PaymentError/PaymentError";

const PaymentRoutes = [
  { path: "/payments", element: <Payment /> },
  { path: "/payments/download", element: <PaymentDownload /> },
  // { path: "/appeals", element: <Appeals /> },
  { path: "/payments/create", element: <PaymentCreate /> },
  { path: "/payments/payment-errors", element: <PaymentError /> },
];

export default PaymentRoutes;
