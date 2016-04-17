import React from 'react';
import { Row, Col } from 'antd';
import '../../../public/less/App.less';
import TapMenu from './TapMenu';
import ResponsiveMixin from 'react-responsive-mixin';

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
                <TapMenu />
            </nav>
        )
    }
})

export default NavBar;