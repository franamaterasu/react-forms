import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./image.scss";

const Image = () => {
  let location = useLocation();

  let actualLocation = location.pathname;

  console.log(actualLocation);

  return (
    <section className="image">
      <div className="image__info">
        <img
          className="image__logo"
          src="https://cdn.worldvectorlogo.com/logos/amazon-2.svg"
          alt="Amazon"
        />
        <p className="image__slogan">
          Our vision is to be earth's most customer-centric company; to build a
          place where people can come to find and discover anything they might
          want to buy online.
        </p>
        {actualLocation === "/register" ? (
          <Link className="image__button" to="/">
            Login
          </Link>
        ) : (
          <Link className="image__button" to="/register">
            Register
          </Link>
        )}
      </div>
    </section>
  );
};

export default Image;
