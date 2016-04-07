import React from "react";
import { Row, Col } from 'antd';
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