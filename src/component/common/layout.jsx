import React, { Component } from 'react';
import NavBar from '../common/NavBar';
import Content from '../common/Content';
import Footer from '../common/Footer';

export default class Layout extends Component{

  render() {
    return (
      <div>
        <NavBar />
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </div>
    )
  }
}
