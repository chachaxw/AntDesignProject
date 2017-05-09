import '../lib/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, IndexRoute } from 'react-router';

import HomePage from '../component/home/HomePage';
import AboutPage from '../component/about/AboutPage';
import WorksPage from '../component/works/WorksPage';

const mountNode = document.getElementById('app');
const customHistory = createBrowserHistory()

const routes = (
    <Router history={customHistory}>
        <Route path="/">
            <IndexRoute component={HomePage}></IndexRoute>
            <Route name="about" path="about" component={AboutPage}></Route>
            <Route name="works" path="works" component={WorksPage}></Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, mountNode);
