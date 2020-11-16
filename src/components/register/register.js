import React, { useState } from "react";
import Logo from "../logo";
import { FaUser, FaMailBulk, FaLock } from "react-icons/fa";

import "./register.scss";

const Register = (props) => {
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
    <section className="register__content">
      <Logo />
      <h3 className="register__title">Register and enjoy</h3>
      <form className="register">
        <div className="register__row">
          <FaUser className="register__icon" />
          <input
            type="text"
            className="register__input"
            placeholder="Your name..."
            onChange={handleOnChangeName}
          />
        </div>
        <div className="register__row">
          <FaMailBulk className="register__icon" />
          <input
            type="text"
            className="register__input"
            placeholder="Your email..."
            onChange={handleOnChangeMail}
          />
        </div>
        <div className="register__row">
          <FaLock className="register__icon" />
          <input
            type="password"
            className="register__input"
            placeholder="Your password..."
            onChange={handleOnChangePwd}
          />
        </div>
        <button
          type="submit"
          className="register__button"
          onClick={handleFormLoginClick}
        >
          Log in
        </button>
      </form>
    </section>
  );
};

export default Register;
