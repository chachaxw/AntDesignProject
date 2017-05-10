import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import '../lib/lib';
import '../../public/less/App.less';
import HomePage from '../component/home/HomePage';
import AboutPage from '../component/about/AboutPage';
import WorksPage from '../component/works/WorksPage';

const mountNode = document.getElementById('app');
const customHistory = createBrowserHistory();

const routes = (
  <Router history={customHistory}>
    <Switch>
      <Route name="/" component={HomePage} />
      <Route name="about" path="about" component={AboutPage} />
      <Route name="works" path="works" component={WorksPage} />
    </Switch>
  </Router>
);

ReactDOM.render(routes, mountNode);
