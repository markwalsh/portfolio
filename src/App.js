import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import Nav from "./Nav";
import Video from "./Video";
import About from "./About";
import icon1 from "./img/card-1.jpg";
import icon2 from "./img/card-2.jpg";
import icon3 from "./img/card-3.jpg";
import icon4 from "./img/card-4.jpg";
import icon5 from "./img/card-5.jpg";
import icon6 from "./img/card-6.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/video" exact component={Video} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="grid-container">
      <div className="grid-item item-1">
        <div>
          <img src={icon1} className="img-icon"></img>
        </div>
        <div className="titletext">Disney</div>
        <div className="bodytext">
          Designed and developed popular browser based games and apps for
          Disney: Minnie Mouse, Winnie The Pooh, Doc Mc Stuffins, Handy Manny,
          etc. Developed using strict OOP based MVC coding methods and
          libraries.
        </div>
      </div>

      <div className="grid-item item-2">
        <div>
          {" "}
          <img src={icon2} className="img-icon"></img>
        </div>
        <div className="titletext">Namco-Bandai</div>
        <div className="bodytext">
          Full time game designer and rapid prototype developer. All day, every
          day, for 3 years I designed and built game prototypes. Reverse
          engineered and programmed an arcade accurate Pac Man that ran in any
          browser on any machine at the correct speed.
        </div>
      </div>

      <div className="grid-item item-3">
        <div>
          {" "}
          <img src={icon3} className="img-icon"></img>
        </div>
        <div className="titletext">ABC Televison</div>
        <div className="bodytext">
          Designed and built a complex Facebook voting app and viral marketing
          tool for ABC's Dancing with the Stars for the 2011 and 2012 seasons.
          Posted excellent stats of daily votes and shared posts to users'
          timelines. Posted weekly updates to the app as contestants were
          eliminated
        </div>
      </div>

      <div className="grid-item item-4">
        <div>
          {" "}
          <img src={icon4} className="img-icon"></img>
        </div>
        <div className="titletext">Facebook</div>
        <div className="bodytext">
          Faceook instructional course development specialist for 2 years at
          Blueprint. Using Javascript combined with cutting edge tools and
          frameworks, designed and developed new components and extensions for
          the Adapt Education framework. Created code driven animations.
        </div>
      </div>

      <div className="grid-item item-5">
        <div>
          {" "}
          <img src={icon5} className="img-icon"></img>
        </div>
        <div className="titletext">Google</div>
        <div className="bodytext">
          3 years fulltime developer for Google Training teams building highly
          regarded and profitable educational games and training sites.
          Instructional designer for the Pixel 3 courses. Produced automation
          tools that saved the team hundreds of hours of repetitive tasks.
        </div>
      </div>

      <div className="grid-item item-6">
        <div>
          {" "}
          <img src={icon6} className="img-icon"></img>
        </div>
        <div className="titletext">Technology</div>
        <div className="bodytext">
          Built with React.js framework Javascript and Sass. I have extensive
          experience with HTML5 and Javascript standards and frameworks. I'm
          also an expert level in Adobe Creative Cloud apps for Image processing
          automation, Video and Audio editing as they are related to web
          production.
        </div>
      </div>

      <div className="grid-item item-foot">
        {" "}
        <h4>CONTACT : Mark Walsh</h4>
        <p>
          <a href="mailto:mark@markwalshcode.com">mark@markwalshcode.com</a>{" "}
        </p>{" "}
      </div>
    </div>
);

export default App;
