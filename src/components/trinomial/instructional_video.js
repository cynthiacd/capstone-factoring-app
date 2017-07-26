import React from 'react';

const Video = () => {

  // console.log("in render of video component");
  return (
    <div>
      <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/eF6zYNzlZKQ">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
