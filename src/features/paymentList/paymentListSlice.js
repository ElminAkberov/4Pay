import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const paymentsLists = createAsyncThunk(
    "paymentList",
    async (formData, { getState, rejectWithValue }) => {
      try {
        const state = getState(); 
        const token = state.login.accessToken; 
  
        if (!token) {
          throw new Error("No access token available");
        }
  
        const response = await axios.get(
          "https://dev.4pay.cash/api/v1/payments/",
          {
            params: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const initialState = {
  loading: false,
  success: false,
  error: null,
  data: null,
};

const paymentsListSlice = createSlice({
  name: "paymentList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(paymentsLists.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(paymentsLists.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(paymentsLists.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default paymentsListSlice.reducer;