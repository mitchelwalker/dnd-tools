import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import Home from './components/Home';
import SpellDetails from './containers/SpellDetails';
import MonsterDetails from './containers/MonsterDetails';
import reducers from './reducers';
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory  from 'history/createBrowserHistory'

require('../style/style.scss');

const createStoreWithMiddleware = applyMiddleware()(createStore);
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history} component={App}>
      <Switch>  
        <Route exact path='/' component={Home}/>
        <Route path='/spells' component={SpellDetails}/>
        <Route path='/monsters' component={MonsterDetails}/>
      </Switch>
    </Router>
  </Provider>
  , document.querySelector('.app'));
