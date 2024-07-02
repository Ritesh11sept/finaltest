import React from "react";
import "./Services.css";
import DS from "../../assests/wt1.jpeg";
import Debating from "../../assests/wt2.avif";
import chess from "../../assests/wt3.avif";

const data = [
  {
    id: 1,
    image: DS,
    title: "24/7 Accessibility",
    description:
      " TherapAI is available around the clock, offering support whenever you need it. Unlike traditional therapy sessions that require scheduling and travel, TherapAI can be accessed anytime and anywhere, providing immediate assistance in moments of need. This constant availability ensures that you always have a companion to turn to, whether it’s during a late-night anxiety episode or a stressful workday.",
  },
  {
    id: 2,
    image: Debating,
    title: "Complementary to Offline Therapy",
    description:
      "While TherapAI is not a replacement for offline therapy, it serves as a valuable addition to your mental health care. It bridges the gaps between therapy sessions, helping you apply the coping strategies and techniques discussed with your therapist in real-time. This continuity of care enhances the overall effectiveness of your mental health treatment, ensuring consistent support and progress.",
  },
  {
    id: 3,
    image: chess,
    title: "Non-Judgmental and Confidential",
    description:
      " One of the key benefits of TherapAI is its non-judgmental nature. You can share your thoughts and feelings openly without fear of stigma or judgment. Additionally, TherapAI ensures that your conversations are confidential and secure, protecting your privacy while you seek help and guidance.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Why TherapAI?</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
