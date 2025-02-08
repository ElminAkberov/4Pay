import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createWithdrawal = createAsyncThunk(
  "widthDrawCreate",
  async (formData, { rejectWithValue }) => {
    try {
      const token = "c9e80d9b1a6057d60020eeec81fbd68b9bb63607"; 
      const response = await axios.get(
        "https://dev.4pay.cash/api/v1/withdraws/withdrawals/",
        {
          params: formData,
          headers: {
            Authorization: `Token ${token}`,
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

const widthDrawCreateSlice = createSlice({
  name: "widthDrawCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createWithdrawal.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })

      .addCase(createWithdrawal.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;

        console.log("actionfullfilled:", action.payload)
      })

      .addCase(createWithdrawal.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default widthDrawCreateSlice.reducer;
