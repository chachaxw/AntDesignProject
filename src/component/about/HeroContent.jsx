import React, { Component } from 'react';
import Button from '../common/Button';

export default class HeroContent extends Component{

  render() {
    return (
      <div className="hero-content">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
          <defs>
            <filter id="filter-bg">
              <feTurbulence type="fractalNoise" baseFrequency="0 0.2" numOctaves="1" result="warp" />
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
            </filter>
          </defs>
        </svg>
        <h1>
          Hello, I am&nbsp;
          <span className="blue">c</span>ha
          <span className="red">c</span>ha
        </h1>
        <p>
          My Chinese name is Zhou Wei.Welcome to my website!
        </p>
        <Button href="https://github.com/chachaxw/myresume" target="_blank" rel="noopener noreferrer">
          View My Resume
        </Button>
        <span className="down-arrow"></span>
      </div>
    )
  }
}
