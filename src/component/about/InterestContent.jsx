import React, { Component } from 'react';
import MoreInfo from '../common/MoreInfo';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { ResponsiveComponent } from 'react-responsive-component';

class Interests extends Component{

  render() {
    return (
        <div className="interest-list">
          <ResponsiveComponent query='(min-width: 320px) and (max-width: 768px)'>
            <Row>
              <Col span='24' style={{backgroundColor: 'rgba(0,0,0,0.5)',padding: '40px'}}>
                <span><i className="iconfont icon-camera"></i></span>
                <p>Photography</p>
              </Col>
              <Col span='24' style={{backgroundColor: 'rgba(0,0,0,0.65)',padding: '40px'}}>
                <span><i className="iconfont icon-bike"></i></span>
                <p>Cycling</p>
              </Col>
              <Col span='24' style={{backgroundColor: 'rgba(0,0,0,0.8)',padding: '40px'}}>
                <span><i className="iconfont icon-music"></i></span>
                <p>Music</p>
              </Col>
              <Col span='24' style={{backgroundColor: 'rgba(0,0,0,0.9)',padding: '40px'}}>
                <span><i className="iconfont icon-book"></i></span>
                <p>Reading</p>
              </Col>
            </Row>
          </ResponsiveComponent>
          <ResponsiveComponent query='(min-width: 769px) and (max-width: 1279px)'>
            <Row>
              <Col span='12' style={{backgroundColor: 'rgba(0,0,0,0.5)',padding: '40px'}}>
                <span><i className="iconfont icon-camera"></i></span>
                <p>Photography</p>
              </Col>
              <Col span='12' style={{backgroundColor: 'rgba(0,0,0,0.65)',padding: '40px'}}>
                <span><i className="iconfont icon-bike"></i></span>
                <p>Cycling</p>
              </Col>
              <Col span='12' style={{backgroundColor: 'rgba(0,0,0,0.8)',padding: '40px'}}>
                <span><i className="iconfont icon-music"></i></span>
                <p>Music</p>
              </Col>
              <Col span='12' style={{backgroundColor: 'rgba(0,0,0,0.9)',padding: '40px'}}>
                <span><i className="iconfont icon-book"></i></span>
                <p>Reading</p>
              </Col>
            </Row>
          </ResponsiveComponent>
          <ResponsiveComponent query='only query and (min-width: 1280px)'>
            <Row>
              <Col span='6' style={{backgroundColor: 'rgba(0,0,0,0.5)',padding: '40px'}}>
                <span><i className="iconfont icon-camera"></i></span>
                <p>Photography</p>
              </Col>
              <Col span='6' style={{backgroundColor: 'rgba(0,0,0,0.65)',padding: '40px'}}>
                <span><i className="iconfont icon-bike"></i></span>
                <p>Cycling</p>
              </Col>
              <Col span='6' style={{backgroundColor: 'rgba(0,0,0,0.8)',padding: '40px'}}>
                <span><i className="iconfont icon-music"></i></span>
                <p>Music</p>
              </Col>
              <Col span='6' style={{backgroundColor: 'rgba(0,0,0,0.9)',padding: '40px'}}>
                <span><i className="iconfont icon-book"></i></span>
                <p>Reading</p>
              </Col>
            </Row>
          </ResponsiveComponent>
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
