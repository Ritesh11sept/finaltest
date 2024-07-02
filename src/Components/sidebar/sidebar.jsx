import React from "react";
import "./Sidebar.css";
import Logo from "../../assests/logo copy.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" className="logoimg" />
      </a>
      <nav className="nav">
        <div className="nav__menu"></div>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <i className="icon-home"></i>
            </a>
          </li>

          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="icon-emotsmile"></i>
            </a>
          </li>

          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              <i className="icon-trophy"></i>
            </a>
          </li>

          <li className="nav__item">
            <a href="#blog" className="nav__link">
              <i className="icon-note"></i>
            </a>
          </li>

          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="icon-bubble"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - 2025.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
