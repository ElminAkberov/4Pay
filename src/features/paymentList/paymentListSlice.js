import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshToken } from "../login/loginSlice";

const apiUrl = import.meta.env.VITE_API_URL;
export const paymentsLists = createAsyncThunk(
  "paymentList",
  async (formData, { getState, rejectWithValue, dispatch }) => {
    try {
      const state = getState();
      let token =
        state?.login?.accessToken || localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No access token available");
      }

      const response = await axios.get(`${apiUrl}/payments/`, {
        params: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          await dispatch(refreshToken());
          const state = getState();
          const newToken =
            state?.login?.accessToken || localStorage.getItem("accessToken");

          const retryResponse = await axios.get(`${apiUrl}/payments/`, {
            params: formData,
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          });

          return retryResponse.data;
        } catch (refreshError) {
          return rejectWithValue(
            "Failed to refresh token: " + refreshError.message
          );
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
