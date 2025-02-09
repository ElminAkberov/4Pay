import axios from "axios";
import store from "../store";
import { refreshToken } from "../features/login/loginSlice";

const api = axios.create({
  baseURL: "https://dev.4pay.cash/api/v1/",
});


api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await store.dispatch(refreshToken()).unwrap();
        localStorage.setItem("accessToken", response);
        api.defaults.headers.Authorization = `Bearer ${response}`; // Global olarak güncelle
        originalRequest.headers.Authorization = `Bearer ${response}`;
        return api(originalRequest);
      } catch (err) {
        store.dispatch(logoutUser());
        return Promise.reject(err);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
