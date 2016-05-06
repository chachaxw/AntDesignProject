import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../component/home/HomePage';
import AboutPage from '../component/about/AboutPage';
import WorksPage from '../component/works/WorksPage';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const mountNode = document.getElementById('react-content');

const routes = (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={HomePage}></IndexRoute>
            <Route name="about" path="about" component={AboutPage}></Route>
            <Route name="works" path="works" component={WorksPage}></Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, mountNode);
