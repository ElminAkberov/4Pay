import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const refillsList = createAsyncThunk(
  "refillsList",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const state = getState(); 

      console.log("state tokennn", state)
      const token = state.login.accessToken; 

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

      if (!Array.isArray(response.data)) {
        throw new Error("Expected an array from the API");
      }
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
        state.data = action.payload;
        console.log("actionfullfilled:", action.payload);
      })
      .addCase(refillsList.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default refillsListSlice.reducer;