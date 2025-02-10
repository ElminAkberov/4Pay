import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshToken } from "../login/loginSlice";

export const refillsList = createAsyncThunk(
  "refillsList/fetch",
  async ({ page, filters }, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState();
      let token =
        state?.login?.accessToken || localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No access token available");
      }

      // Filtreleri API'ye uygun şekilde ekleyelim
      const params = { page, ...filters };

      console.log(params.filters);
      const response = await axios.get(
        "https://dev.4pay.cash/api/v1/appeals/",
        {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data) {
        throw new Error("Expected a valid response from the API");
      }

      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          await dispatch(refreshToken());
          const state = getState();
          const newToken =
            state?.login?.accessToken || localStorage.getItem("accessToken");

          const retryResponse = await axios.get(
            "https://dev.4pay.cash/api/v1/appeals/",
            {
              params,
              headers: {
                Authorization: `Bearer ${newToken}`,
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
  data: [],
  next: null,
  previous: null,
};

const refillsListSlice = createSlice({
  name: "refillsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refillsList.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(refillsList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload.results || [];
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(refillsList.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default refillsListSlice.reducer;
