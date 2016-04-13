import React from 'react';
import { Row, Col } from 'antd';
import '../../../public/less/App.less';
import ResponsiveMixin from "react-responsive-mixin";

/*const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;*/

const NavBar = React.createClass({
    
    mixins: [ResponsiveMixin],

    handleClick: function() {
        console.log("hello");
    },

    render: function(){
        return (
            <nav className="nav-bar">
                <Row>
                    <Col span="12" className="nav-logo">
                        <a href="">
                            <img src="public/images/nav-logo.png" />
                        </a>      
                    </Col>
                    <Col span="12" className="nav-menu">
                        <ul>
                            <li><a href="" className="nav-active">Home</a></li>
                            <li><a href="">Works</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="http://github.com/chachaxw" target="_blank">Github</a></li>
                        </ul>
                        <span className="tab-menu">
                        <i className="iconfont icon-menu" onClick={this.handleClick}></i>
                        </span>
                    </Col>
                </Row>
            </nav>
        )
    }
})

export default NavBar;