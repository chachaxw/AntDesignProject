import React from "react";
import Button from "../common/Button";

const HeroContent = React.createClass ({
    render: function() {
        return (
            <div className="hero-content">
                <h1>
                    Hello, I am&nbsp;
                    <span className="blue">c</span>ha
                    <span className="red">c</span>ha    
                </h1>
                <p>
                    My Chinese name is Zhou Wei.Welcome to 
                    my website!
                </p>
                <Button href="https://github.com/chachaxw/myresume" target="_blank">
                    View My Resume
                </Button>
                <span className="down-arrow"></span>
            </div>
        )
    }
})

export default HeroContent;