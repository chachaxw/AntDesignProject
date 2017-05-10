import React, { Component } from 'react';
import MoreInfo from '../common/MoreInfo';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ResponsiveMixin from 'react-responsive-mixin';

class Interests extends Component{
  mixins: [ResponsiveMixin]

  state = {
    span: '6'
  }

  componentDidMount() {
    this.media({minWidth: 769}, () => {
      this.setState({span: '6'});
    });
    this.media({minWidth: 420, maxWidth: 768}, () => {
      this.setState({span: '12'});
    });
    this.media({minWidth: 320, maxWidth: 420}, () => {
      this.setState({span: '24'});
    });
  }

  render() {
    return (
      <div className="interest-list">
        <Row>
          <Col span={this.state.span} style={{backgroundColor: 'rgba(0,0,0,0.5)',padding: '40px'}}>
            <span><i className="iconfont icon-camera"></i></span>
            <p>Photography</p>
          </Col>
          <Col span={this.state.span} style={{backgroundColor: 'rgba(0,0,0,0.65)',padding: '40px'}}>
            <span><i className="iconfont icon-bike"></i></span>
            <p>Cycling</p>
          </Col>
          <Col span={this.state.span} style={{backgroundColor: 'rgba(0,0,0,0.8)',padding: '40px'}}>
            <span><i className="iconfont icon-music"></i></span>
            <p>Music</p>
          </Col>
          <Col span={this.state.span} style={{backgroundColor: 'rgba(0,0,0,0.9)',padding: '40px'}}>
            <span><i className="iconfont icon-book"></i></span>
            <p>Reading</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default class InterestContent extends Component{

  render() {
    return (
      <div className="my-interest">
        <MoreInfo>
          <h1>Interests</h1>
          <p>
            I have a lot of interests in my life, for instance, photography, cycling,
            listening music,read aticles, and so on. And I also like playing the guitar,
            if you want to ask me about the guitar, you can get in touch me!
          </p>
        </MoreInfo>
        <Interests />
      </div>
    )
  }
}
