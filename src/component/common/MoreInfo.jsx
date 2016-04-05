import React from "react";

const MoreInfo = React.createClass ({

    render: function() {
        return (
            <div className="more-info" {...this.props}>
                {this.props.children}
            </div>
        )
    }
})

export default MoreInfo;