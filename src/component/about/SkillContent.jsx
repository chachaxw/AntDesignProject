import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Progress from 'antd/lib/progress';
import { ResponsiveComponent } from 'react-responsive-component';

const ProgressLine = Progress.Line;

class ListItem extends Component{

  render() {
    return (
      <li>
        <span className="skill-name">{this.props.data.skill}</span>
        <ProgressLine percent={this.props.data.percent} strokeWidth="5"/>
      </li>
    )
  }
}

export default class SkillContent extends Component{
  state = {
    items: [
      {
        id: 1,
        skill: '<html/>',
        percent: 85
      },
      {
        id: '2',
        skill: '<css/>',
        percent: 80
      },
      {
        id: '3',
        skill: '<javascript/>',
        percent: 75
      },
      {
        id: '4',
        skill: '<php/>',
        percent: 50
      },
      {
        id: '5',
        skill: '<nodejs/>',
        percent: 60
      },
      {
        id: '6',
        skill: '<photoshop/>',
        percent: 80
      },
      {
        id: '7',
        skill: '<sketch/>',
        percent: 80
      }
    ]
  }

  render() {
    return (
      <div className="my-skill">
        <ResponsiveComponent query='(min-width: 320px) and (max-width: 860px)'>
          <Row>
            <Col span='24'>
              <div className="my-title-img">
                <p>A Full Inspiration Front-end Developer & UI Designer</p>
              </div>
            </Col>
            <Col span='24'>
              <div className="my-skill-list">
                <h2>Skills</h2>
                <div className="skill-list-item">
                  <ul>
                    {this.state.items.map(item => (
                      <ListItem key={item.id} data={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </ResponsiveComponent>
        <ResponsiveComponent query='only query and (min-width: 861px)'>
          <Row>
            <Col span='8'>
              <div className="my-title-img">
                <p>A Full Inspiration Front-end Developer & UI Designer</p>
              </div>
            </Col>
            <Col span='16'>
              <div className="my-skill-list">
                <h2>Skills</h2>
                <div className="skill-list-item">
                  <ul>
                    {this.state.items.map(item => (
                      <ListItem key={item.id} data={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </ResponsiveComponent>
      </div>
    )
  }
}
