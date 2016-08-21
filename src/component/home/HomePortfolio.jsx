import React from "react";
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PortfolioItem from "../common/PortfolioItem";

const HomePortfolio = React.createClass ({
    render: function() {
        return (
            <div className="portfolio-box" {...this.props}>
                <h1>
                    My Portfolio
                </h1>
                <PortfolioItem />
            </div>
        )
    }
})

export default HomePortfolio;
