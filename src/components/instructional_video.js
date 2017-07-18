import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';

class Video extends Component {

  render() {
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
}

export default Video;
