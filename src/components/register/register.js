import React, { useState } from "react";
import Logo from "../logo";
import {
  FaUser,
  FaMailBulk,
  FaLock,
  FaGenderless,
  FaIdBadge,
  FaPhoneAlt,
} from "react-icons/fa";

import "./register.scss";

const Register = (props) => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [id, setId] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();

  const { formMessage } = props;

  const handleOnChangeName = (e) => {
    setUser(e.target.value);
  };

  const handleOnChangeMail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeID = (e) => {
    setId(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleOnChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleOnChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleFormRegisterClick = (e) => {
    e.preventDefault();
    props.handleFormRegisterClick({
      user: user,
      email: email,
      id: id,
      phone: phone,
      gender: gender,
      pwd: pwd,
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
          <FaIdBadge className="register__icon" />
          <input
            type="text"
            className="register__input"
            placeholder="Your ID..."
            onChange={handleOnChangeID}
          />
        </div>
        <div className="register__row">
          <FaPhoneAlt className="register__icon" />
          <input
            type="text"
            className="register__input"
            placeholder="Your phone..."
            onChange={handleChangePhone}
          />
        </div>
        <div className="register__row">
          <FaGenderless className="register__icon" />
          <select className="register__select" onChange={handleOnChangeGender}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
          onClick={handleFormRegisterClick}
        >
          Register
        </button>
      </form>
      <div className="register__error">
        <p className="register__error__message">{formMessage}</p>
      </div>
    </section>
  );
};

export default Register;
