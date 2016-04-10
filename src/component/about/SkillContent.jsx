import React from "react";
import { Progress, Row, Col } from 'antd';

const ProgressLine = Progress.Line;

const ListItem = React.createClass ({

    render: function() {
        return (
            <li>
                <span className="skill-name">{this.props.data.skill}</span>
                <ProgressLine percent={this.props.data.percent} strokeWidth="5"/>
            </li>
        )
    }
});

const SkillContent = React.createClass ({
   
    getInitialState: function() {
        return {
            items: [
                {
                    id: "1",
                    skill: "<html/>",
                    percent: "85"
                },
                {
                    id: "2",
                    skill: "<css/>",
                    percent: "80"
                },
                {
                    id: "3",
                    skill: "<javascript/>",
                    percent: "75"
                },
                {
                    id: "4",
                    skill: "<php/>",
                    percent: "50"
                },
                {
                    id: "5",
                    skill: "<nodejs/>",
                    percent: "60"
                },
                {
                    id: "6",
                    skill: "<photoshop/>",
                    percent: "80"
                },
                {
                    id: "7",
                    skill: "<sketch/>",
                    percent: "80"
                }
            ]
        }
    },
   
    render: function() {
        return (
            <div className="my-skill">
                <Row>
                    <Col span="8">
                        <div className="my-title-img">
                            <p>A Full Inspiration Front-end Developer & UI Designer</p>
                        </div>
                    </Col>
                    <Col span="16">
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
})

export default SkillContent;