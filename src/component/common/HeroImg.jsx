import React, { Component } from 'react';

export default class HeroImg extends Component{

  render() {
    return (
      <div className='hero-img-box' {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
