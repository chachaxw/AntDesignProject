import React from 'react';

const Button = React.createClass ({

    getInitialState: function() {
        return {href: "http://github.com/chachaxw"}
    },

    render: function() {
        return (
            <a href={this.state.href} className="rect-button">
                {this.props.children}
            </a>
        )
    }
})

export default Button;