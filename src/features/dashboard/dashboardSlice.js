import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshToken } from "../login/loginSlice"; 

export const dashboardThunk = createAsyncThunk(
  "dashboard",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState();
      let token = state?.login?.accessToken || localStorage.getItem("accessToken");

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
      if (error.response?.status === 401) {
        try {
          await dispatch(refreshToken());
          const state = getState();
          const newToken = state?.login?.accessToken || localStorage.getItem("accessToken");

          const retryResponse = await axios.get(
            "https://dev.4pay.cash/api/v1/dashboard/",
            {
              params: formData,
              headers: {
                Authorization: `Bearer ${newToken}`,
              },
            }
          );

          return retryResponse.data;
        } catch (refreshError) {
          return rejectWithValue("Failed to refresh token: " + refreshError.message);
        }
      }

      return rejectWithValue(error.response?.data || error.message);
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
      })
      .addCase(dashboardThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
