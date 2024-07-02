import React from "react";
import "./about.css";
import Image from "../../assests/avatar-2.svg";
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
              Hello! I'm Ritesh, currently pursuing a B.Tech in Computer Science
              and Engineering with a specialization in Business Systems from VIT
              Vellore. My academic journey has fueled my passion for Python,
              LangChain, Generative AI, and Data Science. I am excited to
              explore the endless possibilities these fields offer and am
              dedicated to leveraging technology to solve real-world problems.
              Welcome to my portfolio!,
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> Development</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Science and Analytics </h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage Data__Science"></span>
              </div>
            </div>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">LangChain and Generative AI</h3>
                <span className="skills__number"> 60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage langchain"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
