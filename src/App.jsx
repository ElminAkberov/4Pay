import React from "react";
import Layout from "./layouts/Layout";
import "./global.css";
import { ContextProvider } from "./Context/ContextProvider";
const App = () => {
  return (
    <>
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </>
  );
};

export default App;
