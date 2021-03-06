import React, { Component } from 'react';

export default class HomeAbout extends Component {

  render() {
    return (
      <div className="home-about">
        <span className="about-user-head">
          <img src="public/images/user-head.jpg" alt=""/>
        </span>
        <div className="about-content">
          <h1>Chacha</h1>
          <h2>Front-end Developer & UI Designer</h2>
          <p>
            I am a front-end developer and UI designer, and I’m good at html5, css3, javascript, photoshop, illustrator, sketch. And I also know php, nodejs, after effect and so on, I can do a lot of creative things.
          </p>
        </div>
      </div>
    )
  }
}
