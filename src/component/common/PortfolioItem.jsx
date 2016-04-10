import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import Sortable from "../../common/Sortable";
import SortableMixin from "../../common/react-sortable-mixin";

const ListItemWrapper = React.createClass ({
    
    render: function() {
        
        return (
            <Col span="6">
                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={this.props.data.src}/>
                    </div>
                    <div className="portfolio-desc">
                        <h2>{this.props.data.title}</h2>
                        <p>{this.props.data.desc}</p>
                    </div>  
                </div>
            </Col>
        )
    }
});

const PortfolioItem = React.createClass ({

    mixins: [SortableMixin],
    
    getInitialState: function() {
        return {
            items: [
                {   id: "1",
/*                    url: "http://github.com/chachaxw",*/
                    src: "public/images/item1.png",
                    title: "App Design",
                    desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."},
                {   id: "2",
/*                    url: "http://github.com/chachaxw",*/
                    src: "public/images/item2.png",
                    title: "Web Design",
                    desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."},
                {   id: "3",
/*                    url: "http://github.com/chachaxw",*/
                    src: "public/images/item3.png",
                    title: "Responsive Design",
                    desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."},
                {   id: "4",
/*                    url: "http://github.com/chachaxw",*/
                    src: "public/images/item4.png",
                    title: "Motion Design",
                    desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."}
            ]
        };
    },
    
    handleSort: function (evt) { 
        console.log([SortableMixin]);
    },

    render: function() {
        
        return (
            <Row ref="list">
                {this.state.items.map( item => (
                        <ListItemWrapper key={item.id} data={item} />
                    )
                )}
            </Row>
        )
    }
})

export default PortfolioItem;