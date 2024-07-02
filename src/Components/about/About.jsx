import React from "react";
import "./about.css";
import Image from "../../assests/about.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              {" "}
              Welcome to TherapAI, your dedicated companion for mental
              well-being. TherapAI is a free-to-use AI tool designed to support
              your mental health journey. While it is not a substitute for
              offline therapy, it serves as a valuable addition to your mental
              health toolkit. TherapAI helps in the prognosis and diagnosis of
              mental health ailments, offering insights and guidance tailored to
              your needs. Think of TherapAI as a friendly buddy you can talk to
              anytime, providing a listening ear and helpful advice whenever you
              need it. Your mental wellness is our priority, and we're here to
              walk this path with you.
            </p>
            <a href="" className="btn">
              Get Documentation
            </a>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
