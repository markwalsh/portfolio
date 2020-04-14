import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import logo from './logo.png';

function Nav() {
  return (
    <>
<div className="grid-item item-intro">
<img src={logo} className="img-icon"></img>
</div>
      <nav>
        <div>
          <ul className="nav-Links">
            <Link className="nav-Style2" to="/">
              <li>Portfolio</li>
            </Link>
            <Link className="nav-Style2" to="/video">
              <li>Video</li>
            </Link>
            <Link className="nav-Style2" to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
