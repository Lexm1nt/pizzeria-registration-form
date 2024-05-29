import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Войти</h1>
        <div className="input-box">
          <input type="text" placeholder="Логин" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Пароль" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Запомнить меня
          </label>
          <a href="#">Забыли пароль?</a>
        </div>
        <button type="submit">Войти</button>
        <div className="register-link">
          <p>
            Нет аккаунта? <a href="#">Зарегистрируйтесь</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
