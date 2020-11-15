import React from "react";
import { FaUser, FaMailBulk, FaLock } from "react-icons/fa";

import "./login.scss";

const Login = () => {
  return (
    <section className="login__content">
      <img
        className="login__logo"
        src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
        alt="Amazon"
      />
      <h3 className="login__title">Login with your account</h3>
      <form className="login">
        <div className="login__row">
          <FaUser className="login__icon" />
          <input className="login__input" placeholder="Your name..." />
        </div>
        <div className="login__row">
          <FaMailBulk className="login__icon" />
          <input className="login__input" placeholder="Your email..." />
        </div>
        <div className="login__row">
          <FaLock className="login__icon" />
          <input className="login__input" placeholder="Your password..." />
        </div>
        <button className="login__button">Log in</button>
      </form>
    </section>
  );
};

export default Login;
