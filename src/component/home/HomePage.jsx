import React, {Component} from "react";
import Layout from '../common/Layout';
import HomeBanner from '../home/HomeBanner';
import HomeAbout from '../home/HomeAbout';
import MoreInfo from '../common/MoreInfo';
import InfoContent from '../home/InfoCon';
import HomePortfolio from '../home/HomePortfolio';
import HomeMore from '../home/HomeMore';

export default class HomePage extends Component{

  render() {
    return (
      <Layout>
        <HomeBanner />
        <HomeAbout />
        <MoreInfo>
          <InfoContent />
        </MoreInfo>
        <HomePortfolio />
        <HomeMore />
      </Layout>
    )
  }
}
