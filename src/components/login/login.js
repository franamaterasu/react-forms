import React, { useState } from "react";
import Logo from "../logo";
import { FaUser, FaMailBulk, FaLock } from "react-icons/fa";

import "./login.scss";

const Login = (props) => {
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

  const handleFormLoginClick = (e) => {
    e.preventDefault();
    props.handleFormLoginClick({
      user: { user },
      email: { email },
      pwd: { pwd },
    });
  };

  return (
    <section className="login__content">
      <Logo />
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
          onClick={handleFormLoginClick}
        >
          Log in
        </button>
      </form>
    </section>
  );
};

export default Login;
