import React from "react";
import ReactDOM from 'react-dom';

const BannerImg = React.createClass ({

    getInitialState: function() {
        return {backgroundImage: "url(public/images/banner-img.jpg)"}
    },

    render: function() {
        return (
            <div className="banner-img-box" style={{backgroundImage: this.state.backgroundImage}}></div>
        )
    }
})

export default BannerImg;