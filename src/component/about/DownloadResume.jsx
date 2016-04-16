import React from "react";
import MoreInfo from "../common/MoreInfo";
import Button from "../common/Button";

const DownloadResume = React.createClass({
    render: function() {
        return (
            <MoreInfo>
                <div className="download-info">
                    <p>
                        This is all about me, If you want to know more about me, you can clck the button on below!
                    </p>
                    <Button href="">
                        <i className="iconfont icon-download"></i>
                        Download My Resume
                    </Button>
                </div>
            </MoreInfo>
        )
    }

});

export default DownloadResume;