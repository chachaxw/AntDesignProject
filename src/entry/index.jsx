import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../component/common/NavBar';
import Content from '../component/common/Content';
import HomeBanner from '../component/home/HomeBanner';
import HomeAbout from '../component/home/HomeAbout';
import MoreInfo from '../component/common/MoreInfo';
import InfoContent from '../component/home/InfoCon';
import Footer from '../component/common/Footer';
import LoadingProgress from '../component/common/LoadingProgress';

const mountNode = document.getElementById('react-content');

ReactDOM.render(
    <div>
        <NavBar />
        <Content>
            <LoadingProgress />
            <HomeBanner />
            <HomeAbout />
            <MoreInfo>
                <InfoContent />
            </MoreInfo>
        </Content>
        <Footer />
    </div>,
document.getElementById('react-content'));