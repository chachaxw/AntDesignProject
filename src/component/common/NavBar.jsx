import React from 'react';
import { Row, Col } from 'antd';
import '../../../public/less/App.less';
import ResponsiveMixin from "react-responsive-mixin";

/*const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;*/

const TabMenu = React.createClass({

    componentDidMount: function() {
        
    },

    handleClick: function() {
        console.log("hello");
    },

    render: function() {
        return (
            <div className="tab-menu">
                <span className="tab-menu-button">
                    <i className="iconfont icon-menu" onClick={this.handleClick}></i>
                </span>
                <div className="tab-menu-list">
                    <ul>
                        <li><a href="" className="nav-active">Home</a></li>
                        <li><a href="">Works</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="http://github.com/chachaxw" target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
        )     
    }
});

const NavBar = React.createClass({
    
    mixins: [ResponsiveMixin],

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
                    </Col>
                </Row>
                <TabMenu/>
            </nav>
        )
    }
})

export default NavBar;