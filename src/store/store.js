import { configureStore } from "@reduxjs/toolkit";
import widthDrawListReducer from "../features/widthdraws/widthDrawsListSlice";
import loginReducer from "../features/login/loginSlice";
import paymentsListReducer from "../features/paymentList/paymentListSlice";
import refillsListReducer from "../features/refillisList/refillsListSlice";
import widthdrawsCreateReducer from "../features/widthdraws/widthDrawsCreateSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import accountReducer from "../features/account/accountSlice";

export const store = configureStore({
  reducer: {
    widthdrawList: widthDrawListReducer,
    account: accountReducer,
    login: loginReducer,
    paymentList: paymentsListReducer,
    refillsList: refillsListReducer,
    widthdrawCreate: widthdrawsCreateReducer,
    dashboard: dashboardReducer,
  },
});
