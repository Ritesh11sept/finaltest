import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">24/7</h3>
          <span className="about__subtitle">Hours of Availability</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">54</h3>
          <span className="about__subtitle">Feedback Received</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-graph"></i>
        <div>
          <h3 className="about__title">∞</h3>
          <span className="about__subtitle">Privacy and Security</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">107</h3>
          <span className="about__subtitle">Sessions Completed</span>
        </div>
      </div>
    </div>
  );
};
export default AboutBox;
