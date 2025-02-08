import React from "react";
import Create from "../pages/Withdraws/Create/Create";
import List from "../pages/Withdraws/List/List";
import Download from "../pages/Withdraws/Download/Download";

const WithdrawRoutes = [
  { path: "/withdraws/create", element: <Create /> },
  { path: "/withdraws/list", element: <List /> },
  { path: "/withdraws/download", element: <Download /> },
];

export default WithdrawRoutes;
