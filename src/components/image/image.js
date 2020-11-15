import React from "react";
import "./image.scss";

const Image = () => {
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
        <button className="image__button">Register</button>
      </div>
    </section>
  );
};

export default Image;
