import React, { Component } from 'react';
import Col from 'antd/lib/col';
import { Link } from 'react-router-dom';

export default class TapMenu extends Component{

  state = {
    toggle: false,
    height: '0',
    icon: 'iconfont icon-menu'
  }

  handleClick() {
    const isToggled = this.state.toggle;

    if ( !isToggled ) {
      this.setState({
        toggle: true,
        height: '166px',
        icon: 'iconfont icon-close'
      })
    }else {
      this.setState({
        toggle: false,
        height: '0',
        icon: 'iconfont icon-menu'
      })
    }
  }

  render() {
    return (
      <div className="tap-menu">
        <Col span="12" className="nav-logo">
          <a href="/">
            <img src="public/images/nav-logo.png" alt="" />
          </a>
        </Col>
        <span className="tap-menu-button">
          <i className={this.state.icon} onClick={this.handleClick}></i>
        </span>
        <div className="tap-menu-list" data-toggle={this.state.toggle}>
          <ul style={{height: this.state.height}}>
            <li><a href="" className="nav-active">Home</a></li>
            <li><Link to="works">Works</Link></li>
            <li><Link to="about">About</Link></li>
            <li><a href="http://github.com/chachaxw" target="_blank" rel="noopener noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
