import '../common/lib';
import { Progress } from 'antd';
import NavBar from '../component/common/NavBar';
import Content from '../component/common/Content';
import Footer from '../component/common/Footer';
import ReactDOM from 'react-dom';
import React from 'react';

const mountNode = document.getElementById('react-content');
const ProgressCircle = Progress.Circle;

ReactDOM.render(
    <div>
        <ProgressCircle percent={60} />
        <NavBar />
        <Content />
        <Footer />
    </div>,
mountNode);