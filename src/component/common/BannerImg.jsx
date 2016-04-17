import React from 'react';

const BannerImg = React.createClass ({
    render: function() {
        return (
            <div className="banner-img-box" {...this.props}>
                {this.props.children}
            </div>
        )
    }
})

export default BannerImg;