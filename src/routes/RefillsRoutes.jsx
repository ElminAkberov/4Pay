import React from "react";
import Refills from "../pages/Balance/Refills/Refills";
import RefillsCreate from "../pages/Balance/RefillsCreate/RefillsCreate";
import RefillsDownload from "../pages/Balance/RefillsDownload/RefillsDownload";
import RefillsWallets from "../pages/Balance/RefillsWallets/RefillsWallets";

const BalaceRoutes = [
  { path: "/refills/", element: <Refills /> },
  { path: "/refills/create", element: <RefillsCreate /> },
  { path: "/refills/download", element: <RefillsDownload /> },
  { path: "/refills/wallets", element: <RefillsWallets /> },
];

export default BalaceRoutes;
