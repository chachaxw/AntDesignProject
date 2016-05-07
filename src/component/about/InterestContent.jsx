import React from 'react';
import MoreInfo from '../common/MoreInfo';
import { Row, Col } from 'antd';
import ResponsiveMixin from 'react-responsive-mixin';

const Interests = React.createClass({
    mixins: [ResponsiveMixin],

    getInitialState: function() {
        return {span: "6"}
    },

    componentDidMount: function(){
        this.media({minWidth: 769}, function() {
            this.setState({span: "6"});
        }.bind(this));
        this.media({minWidth: 420, maxWidth: 768}, function() {
            this.setState({span: "12"});
        }.bind(this));
        this.media({minWidth: 320, maxWidth: 420}, function() {
            this.setState({span: "24"});
        }.bind(this));
    },

    render: function() {
        return (
            <div className="interest-list">
                <Row>
                    <Col span={this.state.span} style={{backgroundColor: "rgba(0,0,0,0.5)",padding: "30px"}}>
                        <span><i className="iconfont icon-camera"></i></span>
                        <p>Photography</p>
                    </Col>
                    <Col span={this.state.span} style={{backgroundColor: "rgba(0,0,0,0.65)",padding: "30px"}}>
                        <span><i className="iconfont icon-bike"></i></span>
                        <p>Cycling</p>
                    </Col>
                    <Col span={this.state.span} style={{backgroundColor: "rgba(0,0,0,0.8)",padding: "30px"}}>
                        <span><i className="iconfont icon-music"></i></span>
                        <p>Music</p>
                    </Col>
                    <Col span={this.state.span} style={{backgroundColor: "rgba(0,0,0,0.9)",padding: "30px"}}>
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
