import React, { useState } from "react";
import { FaUser, FaMailBulk, FaLock } from "react-icons/fa";

import "./login.scss";

const Login = () => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  const handleOnChangeName = (e) => {
    setUser(e.target.value);
  };

  const handleOnChangeMail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleFormClick = (e) => {
    e.preventDefault();
    user === null || user === undefined
      ? console.log("Name is empty...")
      : console.log(`Name: ${user}`);
    email === null || email === undefined
      ? console.log("Email is empty or wrong format...")
      : console.log(`Email: ${email}`);
    pwd === null || pwd === undefined
      ? console.log("Password is empty...")
      : console.log(`Password: ${pwd}`);
  };

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
          <input
            type="text"
            className="login__input"
            placeholder="Your name..."
            onChange={handleOnChangeName}
          />
        </div>
        <div className="login__row">
          <FaMailBulk className="login__icon" />
          <input
            type="text"
            className="login__input"
            placeholder="Your email..."
            onChange={handleOnChangeMail}
          />
        </div>
        <div className="login__row">
          <FaLock className="login__icon" />
          <input
            type="password"
            className="login__input"
            placeholder="Your password..."
            onChange={handleOnChangePwd}
          />
        </div>
        <button
          type="submit"
          className="login__button"
          onClick={handleFormClick}
        >
          Log in
        </button>
      </form>
    </section>
  );
};

export default Login;
