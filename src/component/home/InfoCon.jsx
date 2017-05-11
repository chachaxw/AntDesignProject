import React, { Component } from 'react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

export default class InfoContent extends Component{

  render() {
    return (
      <div>
        <p>If you want to know more about me,<br />you can</p>
        <Button href="mailto:867571123@qq.com">Get In Touch</Button>
        <p>or go to<Link to="/about">About</Link></p>
      </div>
    )
  }
}
