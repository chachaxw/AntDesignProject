import React from "react";

const PortfolioItem = React.createClass ({
    getInitialState: function() {
        return {
            src: "public/images/item1.png",
            title: "App Design",
            desc: "This is an app design work, if you want to design an app, I am very pleased to do this for you."
        }
    },

    render: function() {
        return (
            <div className="portfolio-item">
                <div className="portfolio-img">
                    <img src={this.state.src}/>
                </div>
                <div className="portfolio-desc">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.desc}</p>
                </div>
            </div>
        )
    }
})

export default PortfolioItem;