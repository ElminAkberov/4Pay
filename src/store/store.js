import { configureStore } from "@reduxjs/toolkit";
import widthDrawCreateReducer from "../features/widthdraws/widthDrawsCreateSlice"; 

export const store = configureStore({
  reducer: {
    widthDrawCreate: widthDrawCreateReducer,
  },
});