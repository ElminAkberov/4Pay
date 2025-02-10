import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshToken } from "../login/loginSlice";
const apiUrl = import.meta.env.VITE_API_URL;

export const widthDrawsDownload = createAsyncThunk(
  "widthDrawsDownload/fetch",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState();
      const token = state.login.accessToken;

      if (!token) {
        throw new Error("No access token available");
      }

      const response = await axios.post(
        `${apiUrl}/withdraws/download/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          await dispatch(refreshToken());

          const state = getState();
          const newToken = state.login.accessToken;

          const retryResponse = await axios.post(
            `${apiUrl}/withdraws/download/`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
                "Content-Type": "application/json",
              },
            }
          );

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

const widthDrawsDownloadSlice = createSlice({
  name: "widthDrawsDownload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(widthDrawsDownload.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(widthDrawsDownload.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(widthDrawsDownload.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default widthDrawsDownloadSlice.reducer;
