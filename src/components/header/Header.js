import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {greeting} from "../../portfolio";

function Header() {

  return (
    <Headroom>
      <header className={"header"}>
        <a href="/portfolio" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;