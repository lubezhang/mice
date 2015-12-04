import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

import App from "./app";
import First from "./layout/first";
import Series from "./layout/series";
import Archives from "./layout/archives";
import Tags from "./layout/tags";
import About from "./layout/about";


// var NotFound = React.createClass({
//     render: function(){
//         return <h2>Not Found</h2>;
//     }
// });


/**
    <Router >
        <Route path="/" component={App}>
            <Route path="home" component={Home} />
            <Route path="user" component={User} >
                <Route path="list" component={UserList} />
            </Route>
        </Route>
    </Router>
 *   
 */

var routes = (
    <Router >
        <Route component={App}> 
            <Route path="/" component={First} />
            <Route path="series" component={Series} />
            <Route path="archives" component={Archives} />
            <Route path="tags" component={Tags} />
            <Route path="about" component={About} />
        </Route>
    </Router>
);

export default routes;