import React, { Component } from 'react';
import MoreInfo from "../common/MoreInfo";
import Button from "../common/Button";

export default class DownloadResume extends Component{

  render() {
    return (
      <MoreInfo>
        <div className="download-info">
          <p>
            This is all about me, If you want to know more about me, you can clck the button on below!
          </p>
          <Button href="http://chachaxw.github.com/myresume">
            <i className="iconfont icon-download"></i>
            Download My Resume
          </Button>
        </div>
      </MoreInfo>
    )
  }
}
