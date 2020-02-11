import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";

const Router = (theLanding) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>
);

export default Router;