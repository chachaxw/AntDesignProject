import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../component/common/Button'
import NavBar from '../component/common/NavBar';
import Content from '../component/common/Content';
import BannerImg from '../component/home/BannerImg';
import HomeAbout from '../component/home/HomeAbout';
import MoreInfo from '../component/common/MoreInfo';
import Footer from '../component/common/Footer';
import LoadingProgress from '../component/common/LoadingProgress';

const mountNode = document.getElementById('react-content');

ReactDOM.render(
    <div>
        <NavBar />
        <Content>
            <BannerImg />
            <HomeAbout />
            <MoreInfo>
                <Button>
                    Get In Touch
                </Button>
            </MoreInfo>
        </Content>
        <Footer />
    </div>,
mountNode);