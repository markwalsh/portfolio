import React from "react";
import ReactPlayer from "react-player";

import "./App.scss";

function Video() {
  return (
    <div>
      <div className="container">
        <div className="video-center">
          <ReactPlayer
            url={"https://youtu.be/5aQDH4oW_Zs"}
            config={{
              youtube: {
                playerVars: { controls: true, playing: true }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
