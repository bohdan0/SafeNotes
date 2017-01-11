import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import HomeContainer from './home/home_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ AuthFormContainer }/>
          <Route path='/signup' component={ AuthFormContainer } />
          <Route path='/login' component={ AuthFormContainer } />
          <Route path='/home' component={ HomeContainer } />
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
