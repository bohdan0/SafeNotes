import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import HomeContainer from './home/home_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;

    if (currentUser.username) {
      replace('/home');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;

    if (!currentUser.username) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ AuthFormContainer }/>
          <Route path='/login' 
                 component={ AuthFormContainer } 
                 onEnter={_redirectIfLoggedIn} />
          <Route path='/signup' 
                 component={ AuthFormContainer } 
                 onEnter={_redirectIfLoggedIn} />
          <Route path='/home' 
                 component={ HomeContainer } 
                 onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;