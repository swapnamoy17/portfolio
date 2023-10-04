import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={"footer-text"}>
          {emoji("© 2023. Swapnamoy Bhowmick")}
        </p>
      </div>
    </Fade>
  );
}
