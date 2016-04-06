import React from "react";
import BannerImg from "../common/BannerImg";
import Button from "../common/Button";

const HomeAbout = React.createClass ({

    render: function() {
        return (
            <BannerImg style={{backgroundImage: "url(public/images/banner-img.jpeg)"}}>

                <div class="banner-buttons">
                    <Button href="/portfolio">Portfolio</Button>
                    <Button href="http://github.com/chachaxw">Github</Button>
                </div>
            </BannerImg>
        )
    }
})

export default HomeAbout;