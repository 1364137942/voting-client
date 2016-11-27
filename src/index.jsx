/**
 * Created by ali on 16-11-24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import {Route, Router, hashHistory} from 'react-router';
import App from './components/App';
import Results from './components/Results';


const routes = <Route component={App}>
    <Route path="/" component={Voting} />
    <Route path="/result" component={Results} />
</Route>;

ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>,
    document.getElementById('app')
);