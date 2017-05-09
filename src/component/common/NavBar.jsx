import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import '../../../public/less/App.less';
import TapMenu from './TapMenu';
import { Link } from 'react-router';

export default class NavBar extends Component{

    render() {
        return (
            <nav className="nav-bar">
                <Row>
                    <Col span="12" className="nav-logo">
                        <a href="/">
                            <img src="public/images/nav-logo.svg" />
                        </a>
                    </Col>
                    <Col span="12" className="nav-menu">
                        <ul>
                            <li><a href="/" className="nav-active">Home</a></li>
                            <li>
                                <Link to="works">Works</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li><a href="http://github.com/chachaxw" target="_blank">Github</a></li>
                        </ul>
                    </Col>
                </Row>
                <TapMenu />
            </nav>
        )
    }
}
