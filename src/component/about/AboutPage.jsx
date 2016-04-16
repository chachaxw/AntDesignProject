import React from 'react';
import NavBar from '../common/NavBar';
import Content from '../common/Content';
import HeroImg from '../common/HeroImg';
import HeroContent from './HeroContent';
import SkillContent from './SkillContent';
import InterestContent from './InterestContent';
import DownloadResume from './DownloadResume';
import MoreInfo from '../common/MoreInfo';
import Footer from '../common/Footer';

const mountNode = document.getElementById('react-content');

const AboutPage = React.createClass({
    render: function() {
        return (
            <div>
                <HeroImg style={{backgroundImage: "url(public/images/hero-img.png)"}}/>
                <NavBar />
                <Content>
                    <HeroContent />
                    <MoreInfo style={{height: "200px",lineHeight: "200px;"}}>
                        <h1>Something About Me</h1>
                    </MoreInfo>
                    <SkillContent />
                    <InterestContent />
                    <MoreInfo style={{height: "200px",lineHeight: "200px;",backgroundColor: "#E8E8E8",color: "#343434"}}>
                        <h1>What I've Done in School Days?</h1>
                    </MoreInfo>
                    <DownloadResume />
                </Content>
                <Footer />
            </div>
        )
    }
});

export default AboutPage;