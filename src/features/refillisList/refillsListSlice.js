import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const refillsList = createAsyncThunk(
  "refillsList/fetch",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      console.log("Redux State:", state);

      let token =
        state?.login?.accessToken || localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No access token available");
      }

      const response = await axios.get(
        "https://dev.4pay.cash/api/v1/appeals/",
        {
          params: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API Response:", response.data);

      if (!Array.isArray(response.data.results)) {
        throw new Error("Expected an array inside 'results' from the API");
      }

      return response.data.results;
    } catch (error) {
      console.error("API Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  data: [],
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
        state.data = action.payload || [];
        console.log("Data Loaded:", action.payload);
      })
      .addCase(refillsList.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        console.error("Redux Error:", action.payload);
      });
  },
});

export default refillsListSlice.reducer;
