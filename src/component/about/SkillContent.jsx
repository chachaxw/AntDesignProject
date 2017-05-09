import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Progress from 'antd/lib/progress';
import ResponsiveMixin from "react-responsive-mixin";

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

    mixins: [ResponsiveMixin]

    state = {
        items: [
            {
                id: "1",
                skill: "<html/>",
                percent: 85
            },
            {
                id: "2",
                skill: "<css/>",
                percent: 80
            },
            {
                id: "3",
                skill: "<javascript/>",
                percent: 75
            },
            {
                id: "4",
                skill: "<php/>",
                percent: 50
            },
            {
                id: "5",
                skill: "<nodejs/>",
                percent: 60
            },
            {
                id: "6",
                skill: "<photoshop/>",
                percent: 80
            },
            {
                id: "7",
                skill: "<sketch/>",
                percent: 80
            }
        ],
        spanLeft: "8",
        spanRight: "16"
    }

    componentDidMount() {
        this.setState(function(){
            this.media({minWidth: 861}, function() {
                this.setState({spanLeft: "8", spanRight: "16"});
            }.bind(this));
            this.media({minWidth: 320, maxWidth: 860}, function() {
                this.setState({spanLeft: "24", spanRight: "24"});
            }.bind(this));
        })
    }

    render() {
        return (
            <div className="my-skill">
                <Row>
                    <Col span={this.state.spanLeft}>
                        <div className="my-title-img">
                            <p>A Full Inspiration Front-end Developer & UI Designer</p>
                        </div>
                    </Col>
                    <Col span={this.state.spanRight}>
                        <div className="my-skill-list">
                            <h2>Skills</h2>
                            <div className="skill-list-item">
                                <ul>
                                    {this.state.items.map(item => (
                                        <ListItem key={item.id} data={item}/>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
