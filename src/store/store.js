import { configureStore } from "@reduxjs/toolkit";
import widthDrawListReducer from "../features/widthdraws/widthDrawsListSlice"; 
import loginReducer from "../features/login/loginSlice"; 
import paymentsListReducer from "../features/paymentList/paymentListSlice"; 
import refillsListReducer from "../features/refillisList/refillsListSlice"; 
import widthdrawsCreateReducer from "../features/widthdraws/widthDrawsCreateSlice"; 

export const store = configureStore({
  reducer: {
    widthdrawList: widthDrawListReducer,
    login:loginReducer,
    paymentList:paymentsListReducer,
    refillsList:refillsListReducer,
    widthdrawCreate:widthdrawsCreateReducer,
  },
});