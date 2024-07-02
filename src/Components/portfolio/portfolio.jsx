import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItems) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItems;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Resources for your well being :) </h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span
          className="work__item"
          onClick={() => filterItem("Healthy Eating")}
        >
          Healthy Eating
        </span>
        <span className="work__item" onClick={() => filterItem("Books")}>
          Books
        </span>
        <span className="work__item" onClick={() => filterItem("Exercise")}>
          Exercise
        </span>
        <span className="work__item" onClick={() => filterItem("Music")}>
          Music
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
