import React from "react";
import BannerImg from "../common/BannerImg";
import Button from "../common/Button";

const HomeAbout = React.createClass ({

    render: function() {
        return (
            <BannerImg style={{backgroundImage: "url(public/images/banner-img.jpeg)"}}>
                <div className="banner-logo">
                    <img src="public/images/chacha.png" />
                </div>
                <p>
                    Hello, my name is Chacha, and Chinese name is Zhou Wei.Welcome to my own website !
                </p>
                <div className="banner-buttons">
                    <Button href="/portfolio">Portfolio</Button>
                    <Button href="http://github.com/chachaxw">Github</Button>
                </div>
            </BannerImg>
        )
    }
})

export default HomeAbout;