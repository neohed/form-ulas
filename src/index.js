import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import App from './components/App'
import Menu from './components/Menu'
import GridSimpleForm from './components/simple/GridSimpleForm'
import GridCompoundInterest from './components/simple/GridCompoundInterest'

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route path="/grid-complex" component={GridSimpleForm}/>
                <Route path="/compound-interest" component={GridCompoundInterest}/>
                <Route path="/" component={Menu}/>
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);
