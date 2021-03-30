import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter as Router ,Route ,Switch } from 'react-router-dom'

import Cartão from './pages/Cartão'

render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={ App } />
        <Route exact path='/cartao' component={Cartão}/>       
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

