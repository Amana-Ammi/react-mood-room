import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import videoReducer from './reducers/videoReducer';

const rootReducer = combineReducers({
  videoReducer
})

// initializing store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// debugger;
 
ReactDOM.render(
  <Provider store={store} >
    <App /> 
  </Provider> , document.getElementById('root')
);