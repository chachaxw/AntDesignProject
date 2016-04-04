import React from 'react';
import { Row, Col } from 'antd';
import '../../../public/less/App.less';

const NavBar = React.createClass({

    render: function(){
        return (
            <nav className="nav-bar">
                <Row>
                    <Col span="12">
                        <div className="nav-logo">
                            <img src="public/images/nav-logo.png"/>
                        </div>
                    </Col>
                    <Col span="12">
                        <div className="nav-menu clearfix">
                            <ul>
                                <li><a href="" className="nav-active">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">Github</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </nav>
        )
    }
})

export default NavBar;