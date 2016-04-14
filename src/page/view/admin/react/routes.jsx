import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from "./App";

import { Article, ArticleAdd, Tags, Category } from "./layout"

// const history = createBrowserHistory();
var routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Article} />
            <Route path="article" component={Article}>
                <Route path=":method" component={ArticleAdd} />
                <Route path=":method/:articleId" component={ArticleAdd} />
            </Route>
            <Route path="tags" component={Tags} />
            <Route path="category" component={Category} />
        </Route>
    </Router>
);

export default routes;
