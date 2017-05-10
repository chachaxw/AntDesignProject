import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PortfolioItem from '../common/PortfolioItem';

export default class HomePortfolio extends Component {

  render() {
    return (
      <div className="portfolio-box" {...this.props}>
        <h1>My Portfolio</h1>
        <PortfolioItem />
      </div>
    )
  }
}
