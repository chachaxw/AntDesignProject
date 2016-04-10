import React from 'react';
import NavBar from '../common/NavBar';
import Content from '../common/Content';
import BannerImg from '../common/BannerImg';
import BannerImg from '../common/MoreInfo';
import Footer from '../common/Footer';

const mountNode = document.getElementById('react-content');

const AboutPage = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar />
                <Content>
                    <BannerImg style={{height: "94vh",backgroundImage: "url(public/images/hero-img.png)"}}/>
                    <MoreInfo>
                    </MoreInfo />
                </Content>
                <Footer />
            </div>
        )
    }
});

export default AboutPage;