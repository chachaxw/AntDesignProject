import React from 'react';
import { Row, Col } from 'antd';
import '../../../public/less/App.less';

const NavBar = React.createClass({

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
                            <li><a href="">About</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Github</a></li>
                        </ul>
                    </Col>
                </Row>
            </nav>
        )
    }
})

export default NavBar;