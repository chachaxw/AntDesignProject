import React, { Component } from 'react';
import '../../../public/less/App.less';

const ProgressCircle = Progress.Circle;

export default class LoadingProgress extends Component{
    state = {
        percent: 0
    }

    loading() {
        this.setState({
            percent: this.state.percent + 1
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.loading, 60);
    }

    render() {

        if( this.state.percent > 100 ) {
            clearInterval(this.interval);
            return null;
        }else{
            return (
                <ProgressCircle percent={this.state.percent} />
            )
        }

    }
}
