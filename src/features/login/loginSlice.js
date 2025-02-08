import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Kullanıcı giriş yapınca çağırılacak API
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://dev.4pay.cash/api/v1/auth/login/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      // Token'ları localStorage'a kaydet
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      localStorage.setItem("role", response.data.role);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Access token yenileme
export const refreshToken = createAsyncThunk(
  "login/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refresh = localStorage.getItem("refreshToken");
      if (!refresh) throw new Error("No refresh token available");

      const response = await axios.post("https://dev.4pay.cash/api/v1/auth/refresh/", { refresh });

      // Yeni access token'ı kaydet
      localStorage.setItem("accessToken", response.data.access);

      return response.data.access;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  role: localStorage.getItem("role") || null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.role = action.payload.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
