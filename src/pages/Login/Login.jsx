import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutUser,
  startTokenRefresh,
  stopTokenRefresh,
} from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { success, accessToken } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (success && accessToken) {
      dispatch(startTokenRefresh());
      navigate("/home");
    }

    return () => {
      dispatch(stopTokenRefresh());
    };
  }, [success, accessToken, dispatch, navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(login));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      <h2 className="text-white text-5xl comfortaa p-16 text-center">
        <span className="text-5xl">4</span>Pay{" "}
        <sup className="text-[10px]">&copy;</sup>
      </h2>
      <div className="flex flex-col items-center justify-center min-h-screen mt-[-9rem]">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username">Имя пользователя</label>
            <input
              id="username"
              name="username"
              onChange={handleChange}
              value={login.username}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={login.password}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer"
          >
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
