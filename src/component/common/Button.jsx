import React, { Component } from 'react';

export default class Button extends Component{
    render() {
        return (
            <a href={this.props.href} className="rect-button" {...this.props}>
                {this.props.children}
            </a>
        )
    }
}
