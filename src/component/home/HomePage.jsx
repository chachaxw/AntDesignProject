import React from 'react';
import NavBar from '../common/NavBar';
import Content from '../common/Content';
import HomeBanner from '../home/HomeBanner';
import HomeAbout from '../home/HomeAbout';
import MoreInfo from '../common/MoreInfo';
import InfoContent from '../home/InfoCon';
import HomePortfolio from '../home/HomePortfolio';
import HomeMore from '../home/HomeMore';
import Footer from '../common/Footer';

const HomePage = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar />
                <Content>
                    <HomeBanner />
                    <HomeAbout />
                    <MoreInfo>
                        <InfoContent />
                    </MoreInfo>
                    <HomePortfolio />
                    <HomeMore />
                </Content>
                <Footer />
            </div>
        )
    }
});

export default HomePage;
