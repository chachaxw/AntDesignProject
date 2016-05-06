import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
/*const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;*/

const TapMenu = React.createClass({

    getInitialState: function() {
        return {
            toggle: false,
            height: "0",
            icon: "iconfont icon-menu"
        }
    },

    handleClick: function() {
        // console.log(this.state);

        const isToggled = this.state.toggle;

        if ( !isToggled )
            this.setState(
                {
                    toggle: true,
                    height: "166px",
                    icon: "iconfont icon-close"
                }
            )
        else
            this.setState(
                {
                    toggle: false,
                    height: "0",
                    icon: "iconfont icon-menu"
                }
            )
    },

    render: function() {
        return (
            <div className="tap-menu">
                <Col span="12" className="nav-logo">
                    <a href="">
                        <img src="public/images/nav-logo.png" />
                    </a>
                </Col>
                <span className="tap-menu-button">
                    <i className={this.state.icon} onClick={this.handleClick}></i>
                </span>
                <div className="tap-menu-list" data-toggle={this.state.toggle}>
                    <ul style={{height: this.state.height}}>
                        <li><a href="" className="nav-active">Home</a></li>
                          <li>
                              <Link to="works">Works</Link>
                          </li>
                          <li>
                              <Link to="about">About</Link>
                          </li>
                        <li><a href="http://github.com/chachaxw" target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

export default TapMenu;
