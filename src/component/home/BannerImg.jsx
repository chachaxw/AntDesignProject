import React from "react";
import Button from '../common/Button';

const BannerImg = React.createClass ({

    getInitialState: function() {
        return {backgroundImage: "url(public/images/banner-img.jpeg)"}
    },

    render: function() {
        return (
            <div className="banner-img-box" style={{backgroundImage: this.state.backgroundImage}}>
                <div className="banner-buttons">
                    <Button style={{background: '#343434'}}>Portfilo</Button>
                    <Button>Github</Button>
                </div>
            </div>
        )
    }
})

export default BannerImg;