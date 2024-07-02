import React from "react";
import "./Pricing.css";
import Image1 from "../../assests/price-1.svg";
import Image2 from "../../assests/price-2.svg";
import Image3 from "../../assests/price-3.svg";
const Pricing = () => {
  return (
    <sectio className="pricing container section">
      <h2 className="section__title">Pricing Plans</h2>
      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">
            Our Basic Plan offers an accessible introduction to our mental
            health therapy AI, providing essential tools to support your mental
            well-being. With this plan, you get access to daily mood tracking,
            personalized coping strategies, and a limited number of AI-driven
            therapy sessions each month. It's designed to help you build a
            foundation for better mental health, offering reliable support
            whenever you need it.
          </p>
          <p className="pricing__support">Email Support</p>
          <h3 className="price">
            <em>$</em>9 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing__item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">
            The Premium Plan enhances your experience with additional features
            to deepen your mental health journey. Along with everything in the
            Basic Plan, you receive unlimited AI therapy sessions, advanced
            progress tracking, and customized mindfulness exercises tailored to
            your specific needs. This plan is perfect for those seeking a more
            comprehensive and flexible approach to maintaining their mental
            well-being.
          </p>
          <p className="pricing__support"> 24X7 support</p>
          <h3 className="price">
            <em>$</em>15 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing__item">
          <img src={Image3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">
            Our Advanced Plan is the ultimate package for individuals seeking an
            in-depth, holistic approach to mental health care. It includes all
            the benefits of the Premium Plan, plus access to exclusive AI-guided
            therapy programs, detailed mental health reports, and priority
            support from our team. This plan is ideal for those who want to
            fully immerse themselves in their mental health journey, leveraging
            cutting-edge AI technology for optimal support and growth.
          </p>
          <p className="pricing__support">
            get in touch with licensed therapists.
          </p>
          <h3 className="price">
            <em>$</em>19 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>
      </div>
    </sectio>
  );
};

export default Pricing;
