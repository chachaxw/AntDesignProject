import React, { Component } from 'react';

export default class MoreInfo extends Component{

    render() {
        return (
            <div className="more-info" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}
