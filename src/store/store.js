import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import userReducer from '../reducers/userReducer';
import thunk from 'redux-thunk';

export let initStore = () => {

  const reducer = combineReducers( {
    userResult: userReducer
  });

  const store = createStore( reducer,
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
