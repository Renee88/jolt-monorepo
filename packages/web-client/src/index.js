import "@babel/polyfill";
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './redux/reducers'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo-client/ApolloClient'
import { gql } from "apollo-boost";


const loggerMiddleware = createLogger()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(thunk, loggerMiddleware))
)



ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'))



