import React, { Component } from 'react';

export default class BannerImg extends Component{
    render() {
        return (
            <div className="banner-img-box" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}
