import React from "react";
import "./App.scss";

import icon0 from "./img/card-0.jpg";

function Spirit() {
  return (
    <div className="grid-container2">
      <div className="grid-item item-0">
        <div>
          <img src={icon0} className="img-icon"></img>
        </div>
        <div className="titletext2">Mark Walsh</div>
        <div className="bodytext2">
          I've been developing websites professionally since 1994. For 20 years
          I was a professional game developer for Disney among others. At
          Facebook and Google I developed educational content and gamification.
          I'm expert level with OOP code and Adobe content creation tools. I
          love science and the arts, people and animals.
        </div>
      </div>
      <div className="grid-item item-foot2">
        {" "}
        <h4>CONTACT : Mark Walsh</h4>
        <p>
          <a href="mailto:mark@markwalshcode.com">mark@markwalshcode.com</a>{" "}
        </p>{" "}
      </div>
    </div>
  );
}

export default Spirit;
