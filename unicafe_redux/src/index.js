import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import counterReducer from './reducer'
import {createStore} from 'redux'

const store = createStore(counterReducer)

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}

render()
store.subscribe(render)