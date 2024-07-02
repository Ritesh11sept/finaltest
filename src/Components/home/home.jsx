import React from "react";
import "./Home.css";
import Me from "../../assests/avatar-1.svg";

import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">TherapAI</h1>
        <span className="home__education">
          Find Support, Guidance and a Listening Ear
        </span>

        <a href="#contact" className="btn">
          Get Started
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
