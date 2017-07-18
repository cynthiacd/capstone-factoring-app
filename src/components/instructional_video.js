import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {

  render() {
    console.log("in render of video component");

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe clasName="embed-responsive-item" src={"http://www.youtube.com/embed/eF6zYNzlZKQ"}></iframe>
        </div>
      </div>
    );
  }
}

export default Video;
