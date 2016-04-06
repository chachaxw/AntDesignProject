import { Progress } from 'antd';
import React from 'react';
import '../../../public/less/App.less';

const ProgressCircle = Progress.Circle;

const LoadingProgress = React.createClass({
    getInitialState: function() {
        return {percent: 0};
    },

    loading: function() {
         this.setState(this.state.percent + 1);
    },

    componentDidMount: function() {
        //this.interval = setInterval(this.loading, 200);
    },

    componentWillMount: function() {

    },

    render: function() {
        return (
            <ProgressCircle percent={this.state.percent} />
        )
    }
})

export default LoadingProgress;