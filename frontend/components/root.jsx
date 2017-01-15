import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AuthFormContainer from './auth_form/auth_form_container';
import NoteIndexContainer from './notes/note_index_container';
import NewFormContainer from './new_form/new_form_container';
import HomeContainer from './home/home_container';
import App from './app';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;

    if (currentUser.username) {
      replace('/home/notebooks/all');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;

    if (!currentUser.username) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ AuthFormContainer }
                      onEnter={ _redirectIfLoggedIn } />

          <Route path='login' 
                 component={ AuthFormContainer } 
                 onEnter={ _redirectIfLoggedIn } />

          <Route path='signup' 
                 component={ AuthFormContainer } 
                 onEnter={ _redirectIfLoggedIn } />

          <Route path='home' 
                 component={ HomeContainer } 
                 onEnter={ _ensureLoggedIn }>

            <IndexRoute component={ NoteIndexContainer }
                        onEnter={ _ensureLoggedIn } />

            <Route path='notebooks/:notebookId'
                   component={ NoteIndexContainer }
                   onEnter={ _ensureLoggedIn } />

          </Route>

          <Route path='new/:param'
                 component={ NewFormContainer }
                 onEnter={ _ensureLoggedIn } />

        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
