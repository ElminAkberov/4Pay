import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshToken } from "../login/loginSlice";

const apiUrl = import.meta.env.VITE_API_URL;
export const getAccountInfo = createAsyncThunk(
  "account/getAccountInfo",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      let accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new Error("No access token available");

      const response = await axios.get(`${apiUrl}/accounts/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.is_active) {
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("username", response.data.username);
      }
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          await dispatch(refreshToken());
          const state = getState();
          const newAccessToken =
            state?.login?.accessToken || localStorage.getItem("accessToken");

          const retryResponse = await axios.get(`${apiUrl}/accounts/me`, {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
              "Content-Type": "application/json",
            },
          });

          if (retryResponse.data.is_active) {
            localStorage.setItem("role", retryResponse.data.role);
            localStorage.setItem("username", retryResponse.data.username);
          }
          return retryResponse.data;
        } catch (refreshError) {
          return rejectWithValue(
            "Failed to refresh token: " + refreshError.message
          );
        }
      }
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccountInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAccountInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
