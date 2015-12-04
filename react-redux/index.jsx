import React, { Component } from 'react';
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './react/routes' 
import reducers from './redux/reducers';

render(
    <Provider store={ createStore(reducers) }>
        {routes}
    </Provider>,
    document.getElementById("wrapper")
);


// render(routes, document.getElementById("wrapper"));