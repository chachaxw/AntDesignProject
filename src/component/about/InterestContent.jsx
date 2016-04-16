import React from 'react';
import MoreInfo from '../common/MoreInfo';
import { Row, Col } from 'antd';

const Interests = React.createClass({

    render: function() {
        return (
            <div className="interest-list">
                <Row>
                    <Col span="6">
                        <span><i className="iconfont icon-camera"></i></span>
                        <p>Photography</p>
                    </Col>
                    <Col span="6">
                        <span><i className="iconfont icon-bike"></i></span>
                        <p>Cycling</p>
                    </Col>
                    <Col span="6">
                        <span><i className="iconfont icon-music"></i></span>
                        <p>Music</p>
                    </Col>
                    <Col span="6">
                        <span><i className="iconfont icon-book"></i></span>
                        <p>Reading</p>
                    </Col>
                </Row>
            </div>
        )
    }
})

const InterestContent = React.createClass({
    render: function() {
        return (
            <div className="my-interest">
                <MoreInfo>
                    <h1>Interests</h1>
                    <p>
                        I have a lot of interests in my life, for instance, photography, cycling, listening music, 
    read aticles, and so on. And I also like playing the guitar, if you want to ask me about the guitar, you can get in touch me! 
                    </p>
                </MoreInfo>
                <Interests />
            </div>
        )
    }
});

export default InterestContent;




