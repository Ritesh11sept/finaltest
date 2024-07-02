import React from "react";
import "./Services.css";
import DS from "../../assests/dsf.avif";
import Debating from "../../assests/debatingf.avif";
import chess from "../../assests/chessfinal.avif";

const data = [
  {
    id: 1,
    image: DS,
    title: "Data Science",
    description:
      "My fascination with data science drives me to uncover insights from data, utilizing analytical techniques to solve complex problems and make data-driven decisions. I am passionate about leveraging machine learning and statistical methods to interpret data trends and patterns. Through various projects and research, I continuously strive to expand my knowledge and expertise in this ever-evolving field.",
  },
  {
    id: 2,
    image: Debating,
    title: "Public Speaking and Debating",
    description:
      "I enjoy engaging with diverse audiences through public speaking, honing my communication skills, and sharing ideas effectively. Participating in Model United Nations (MUN) conferences has enhanced my ability to debate, negotiate, and articulate my thoughts clearly. These experiences have not only boosted my confidence but also broadened my understanding of global issues.",
  },
  {
    id: 3,
    image: chess,
    title: "Chess",
    description:
      "Playing chess sharpens my strategic thinking and problem-solving abilities, providing a stimulating mental challenge. I relish the process of anticipating my opponent's moves and devising complex strategies to outmaneuver them. Chess has taught me patience, foresight, and the importance of learning from every game, win or lose.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Hobbies</h2>

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
