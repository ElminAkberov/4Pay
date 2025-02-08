import { configureStore } from "@reduxjs/toolkit";
import widthDrawCreateReducer from "../features/widthdraws/widthDrawsCreateSlice"; 
import loginReducer from "../features/login/loginSlice"; 
import paymentsListReducer from "../features/paymentList/paymentListSlice"; 

export const store = configureStore({
  reducer: {
    widthDrawCreate: widthDrawCreateReducer,
    login:loginReducer,
    paymentList:paymentsListReducer
  },
});