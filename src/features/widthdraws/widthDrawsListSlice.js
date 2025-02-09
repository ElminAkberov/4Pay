import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const widthdrawList = createAsyncThunk(
  "widthdrawList",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const state = getState(); 

      console.log("state tokennn", state)
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
        console.log("actionfullfilled:", action.payload);
      })
      .addCase(widthdrawList.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default widthDrawListSlice.reducer;