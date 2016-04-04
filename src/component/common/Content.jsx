import React from 'react';
import { Row, Col } from 'antd';
import '../../../public/less/App.less';

const Content = React.createClass ({
    render: function() {
        return (
            <div className="content" {...this.props}>
                {this.props.children}
            </div>
        )
    }
})

export default Content;