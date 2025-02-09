import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const widthdrawCreate = createAsyncThunk(
    "widthdrawCreate",
    async (formData, { rejectWithValue, getState }) => {
      try {
        const state = getState();
        const token = state.login.accessToken;
  
        console.log("Token:", token); 
  
        if (!token) {
          throw new Error("No access token available");
        }
  
        const response = await axios.post(
          "https://dev.4pay.cash/api/v1/withdraws/create/",
          formData, 
          {
            headers: {
              Authorization: `Bearer  ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("API Error:", error.response);
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

const widthDrawsCreateSlice = createSlice({
  name: "widthdrawCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(widthdrawCreate.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(widthdrawCreate.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
        console.log("actionfullfilled:", action.payload);
      })
      .addCase(widthdrawCreate.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default widthDrawsCreateSlice.reducer;