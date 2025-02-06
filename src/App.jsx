import React from "react";
import Layout from "./layouts/Layout";
import { MenuProvider } from "./Context/MenuContext";

const App = () => {
  return (
    <>
      <MenuProvider>
        <Layout />
      </MenuProvider>
    </>
  );
};

export default App;
