import React, { Component } from "react";
import BannerImg from "../common/BannerImg";
import Button from "../common/Button";

export default class HomeBanner extends Component{

    render() {
        return (
            <BannerImg style={{backgroundImage: "url(public/images/banner-img.jpeg)"}}>
                <div className="banner-logo">
                    <img src="public/images/chacha.png" />
                </div>
                <p>
                    Hello, my name is Chacha, and Chinese name is 周伟😄.Welcome to my own website !
                </p>
                <div className="banner-buttons">
                    <Button href="http://www.zcool.com.cn/u/2472864" target="_blank">Portfolio</Button>
                    <Button href="http://github.com/chachaxw">Github</Button>
                </div>
            </BannerImg>
        )
    }
}
