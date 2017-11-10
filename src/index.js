import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'
import rootSaga from './sagas'
//import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
<Provider store={store}>
    <Root />
</Provider>, document.getElementById('root'));
//registerServiceWorker();
