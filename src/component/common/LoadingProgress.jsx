import { Progress } from 'antd';
import React from 'react';
import '../../../public/less/App.less';

const ProgressCircle = Progress.Circle;

const LoadingProgress = React.createClass({
    getInitialState: function() {
        return {percent: 0};
    },

    loading: function() {
         this.setState({percent: this.state.percent + 1});
    },

    componentDidMount: function() {
        //this.interval = setInterval(this.loading, 200);
    },

    componentWillUnMount: function() {
        if( this.state.percent == 100 ) {
            clearInterval(this.interval);
        }
    },

    render: function() {
        return (
            <ProgressCircle percent={this.state.percent} />
        )
    }
})

export default LoadingProgress;