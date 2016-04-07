import React from "react";
import { Row, Col } from "antd";
import $ from "jquery";

const PortfolioItem = React.createClass ({

    render: function() {
        var data = [
            {   src: "public/images/item1.png",
                title: "App Design",
                desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."},
            {   src: "public/images/item2.png",
                title: "Web Design",
                desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."},
            {   src: "public/images/item3.png",
                title: "Motion Design",
                desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."},
            {   src: "public/images/item4.png",
                title: "Web Development",
                desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."}
        ];

        const items = data;
        const portfolioItem = items.map (function(item) {
            return (
                <Col span="6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <img src={item.src}/>
                        </div>
                        <div className="portfolio-desc">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </Col>
            )
        });

        return (
            <Row>
                {portfolioItem}
            </Row>
        )
    }
})

export default PortfolioItem;