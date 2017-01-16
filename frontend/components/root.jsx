import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AuthFormContainer from './auth_form/auth_form_container';
import NotebookIndexContainer from './notebooks/notebook_index_container';
import NoteIndexContainer from './notes/note_index_container';
import TagIndexContainer from './tags/tag_index_container';
import NewFormContainer from './new_form/new_form_container';
import HomeContainer from './home/home_container';
import App from './app';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;

    if (currentUser.username) {
      replace('/home/notebooks/all/notes/all');
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

          <Route path='new/:param'
                 component={ NewFormContainer }
                 onEnter={ _ensureLoggedIn } />

          <Route path='home' 
                 component={ HomeContainer } 
                 onEnter={ _ensureLoggedIn }>

            <IndexRoute component={ NoteIndexContainer }
                        onEnter={ _ensureLoggedIn } />

            <Route path='notebooks/:notebookId'
                   component={ NotebookIndexContainer }
                   onEnter={ _ensureLoggedIn } >

              <Route path='notes/:noteId'
                     component={ NoteIndexContainer }
                     onEnter={ _ensureLoggedIn } />

            </Route>

            <Route path='tags/:tagId'
                   component={ TagIndexContainer }
                   onEnter={ _ensureLoggedIn } >

              <Route path='notes/:noteId'
                     component={ NoteIndexContainer }
                     onEnter={ _ensureLoggedIn } />

            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
