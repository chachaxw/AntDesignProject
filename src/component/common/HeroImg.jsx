import React from 'react';

const HeroImg = React.createClass ({
    render: function() {
        return (
            <div className="hero-img-box" {...this.props}>
                {this.props.children}
            </div>
        )
    }
})

export default HeroImg;