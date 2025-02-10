import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./layouts/Layout";
import { ContextProvider } from "./Context/ContextProvider";
import { refreshToken, startTokenRefresh, stopTokenRefresh } from "./features/login/loginSlice";

import "./global.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startTokenRefresh());

    const interval = setInterval(() => {
      dispatch(refreshToken());
    }, 10000);

    return () => {
      clearInterval(interval);
      dispatch(stopTokenRefresh());
    };
  }, [dispatch]);

  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
};

export default App;
