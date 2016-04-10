import React from 'react';

const Button = React.createClass ({
    render: function() {
        return (
            <a href={this.props.href} className="rect-button" {...this.props}>
                {this.props.children}
            </a>
        )
    }
})

export default Button;