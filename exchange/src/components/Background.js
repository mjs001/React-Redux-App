import React from "react";
import video from "./video.mp4";
class Video extends React.Component {
  render() {
    return (
      <>
        <video loop muted autoPlay>
          <source src={video} />
        </video>

        <div className="behindV"></div>
      </>
    );
  }
}

export default Video;
