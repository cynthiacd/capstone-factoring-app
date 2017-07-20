import React from 'react';
import Header from './header';

const Video = () => {

  // console.log("in render of video component");
  return (
    <div>
      <div><Header /></div>

      <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            clasName="embed-responsive-item"
            src={"http://www.youtube.com/embed/eF6zYNzlZKQ"}>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
