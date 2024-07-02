import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">7</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">5680</h3>
          <span className="about__subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-graph"></i>
        <div>
          <h3 className="about__title">3+</h3>
          <span className="about__subtitle">Years of Experience</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">5</h3>
          <span className="about__subtitle">
            Programming Languages Mastered
          </span>
        </div>
      </div>
    </div>
  );
};
export default AboutBox;