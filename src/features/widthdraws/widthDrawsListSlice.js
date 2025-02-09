import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshToken } from "../login/loginSlice";

export const widthdrawList = createAsyncThunk(
  "widthdrawList/fetch",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState();
      const token = state.login.accessToken;

      if (!token) {
        throw new Error("No access token available");
      }

      const response = await axios.get(
        "https://dev.4pay.cash/api/v1/withdraws/",
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
          const newToken = state.login.accessToken; 

          const retryResponse = await axios.get(
            "https://dev.4pay.cash/api/v1/withdraws/",
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

const widthDrawListSlice = createSlice({
  name: "widthdrawList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(widthdrawList.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(widthdrawList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(widthdrawList.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default widthDrawListSlice.reducer;
