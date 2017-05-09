import React, { Component } from 'react';
import NavBar from '../common/NavBar';

export default class WorksPage extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1 style={{ textAlign: 'center',marginTop: '200px' }}>my works!</h1>
      </div>
    )
  }
}
