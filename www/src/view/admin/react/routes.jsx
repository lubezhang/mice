import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from "./app";

import { Articles, Tags } from "./layout"

// const history = createBrowserHistory();
var routes = (
    <Router>
        <Route component={App}>
            <Route path="/" component={Articles} />
            <Route path="/tags" component={Tags} />
        </Route>
    </Router>
);

export default routes;
