import '../common/lib';
import NavBar from '../component/common/NavBar';
import Content from '../component/common/Content';
import HeroImg from '../component/home/HeroImg';
import LoadingProgress from '../component/common/LoadingProgress';
import Footer from '../component/common/Footer';
import ReactDOM from 'react-dom';
import React from 'react';

const mountNode = document.getElementById('react-content');

ReactDOM.render(
    <div>
        <NavBar />
        <Content>
            <HeroImg />
        </Content>
        <Footer />
    </div>,
mountNode);