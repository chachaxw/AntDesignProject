import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import '../../../public/less/App.less';

const SocialTips = React.createClass ({

    render: function() {

        const src = "public/images/qrcode.png";

        return (
            <div className="tips-box">
                <div className="tips-img">
                    <img src={src}/>
                </div>
                <div className="tips-info">
                    <p>
                        Scan the QRCode!
                    </p>
                    <i className="iconfont icon-scan"></i>
                </div>
            </div>
        )
    }
});

const Footer = React.createClass ({

    render: function() {

        return (
            <footer className="footer">
                <div className="footer-logo">
                    <a href=""><img src="public/images/nav-logo.png" /></a>
                </div>
                <nav className="footer-nav">
                    <ul className="clearfix">
                        <li><a href="/">Home</a></li>
                          <li>
                              <Link to="works">Works</Link>
                          </li>
                          <li>
                              <Link to="about">About</Link>
                          </li>
                        <li><a href="http://github.com/chachaxw" target="_blank">Github</a></li>
                    </ul>
                </nav>
                <div className="footer-social-icon">
                    <i className="iconfont icon-weixin"></i>
                    <SocialTips />
                </div>
                <div className="footer-info">
                    CopyRight © 2016. All Rights Reserved.
                </div>
            </footer>
        )
    }
})

export default Footer;
