import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const dashboardThunk = createAsyncThunk(
  "dashboard",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const state = getState(); 
      const token = state.login.accessToken; 

      if (!token) {
        throw new Error("No access token available");
      }

      const response = await axios.get(
        "https://dev.4pay.cash/api/v1/dashboard/",
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

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dashboardThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(dashboardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
        console.log("actionfullfilled:", action.payload);
      })
      .addCase(dashboardThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;