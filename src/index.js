import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { reducer } from './store/reducer'
import createSagaMiddleware from 'redux-saga'
import { fetchTicketsWatcher } from './saga'
import { BrowserRouter } from 'react-router-dom'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(fetchTicketsWatcher)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
