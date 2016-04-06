import React from 'react';
import { Row, Col } from 'antd';
import '../../../public/less/App.less';
import '../../../public/less/IconFont.less';

const Footer = React.createClass ({
    render: function() {
        return (
            <footer className="footer">
                <div className="footer-logo">
                    <a href=""><img src="public/images/nav-logo.png" /></a>
                </div>
                <nav className="footer-nav">
                    <ul className="clearfix">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="http://github.com/chachaxw" target="_blank">Github</a></li>
                    </ul>
                </nav>
                <div className="footer-social-icon">
                    <ul className="clearfix">
                        <li><i className="iconfont icon-qq"></i></li>
                        <li><i className="iconfont icon-weixin"></i></li>
                        <li><i className="iconfont icon-weibo"></i></li>
                    </ul>
                </div>
                <div className="footer-info">
                    CopyRight © 2016. All Rights Reserved.
                </div>
            </footer>
        )
    }
})

export default Footer;