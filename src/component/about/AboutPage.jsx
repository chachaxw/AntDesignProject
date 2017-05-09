import React, { Component } from 'react';
import NavBar from '../common/NavBar';
import Content from '../common/Content';
import HeroImg from '../common/HeroImg';
import HeroContent from './HeroContent';
import SkillContent from './SkillContent';
import InterestContent from './InterestContent';
import DownloadResume from './DownloadResume';
import MoreInfo from '../common/MoreInfo';
import WhatIDid from './WhatIDid';
import Footer from '../common/Footer';

export default class AboutPage extends Component{
  render() {
    return (
      <div>
        <HeroImg style={{backgroundImage: "url(public/images/hero-img.png)"}}/>
        <NavBar />
        <Content>
          <HeroContent />
          <MoreInfo style={{height: "200px",lineHeight: "200px"}}>
            <h1>Something About Me</h1>
          </MoreInfo>
          <SkillContent />
          <InterestContent />
          <WhatIDid />
          <DownloadResume />
        </Content>
        <Footer />
      </div>
    )
  }
}
