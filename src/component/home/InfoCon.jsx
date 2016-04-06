import React from "react";
import Button from '../common/Button';

const InfoContent = React.createClass({

    render: function() {
        return (
            <div>
                <p>
                    If you want to know more about me,
                    <br />
                    you can
                </p>
                <Button href="http://www.baidu.com">
                    Get In Touch
                </Button>
                <p>
                    or go to
                    <a href="" target="_blank">About</a>
                </p>
            </div>
        )
    }
});

export default InfoContent;