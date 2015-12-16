import React, { Component } from 'react';
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './react/routes' 
import store from './redux/store';

require("../../sass/app.sass")

render(
    <Provider store={ store() }>
        {routes}
    </Provider>,
    document.getElementById("wrapper")
);


// render(routes, document.getElementById("wrapper"));