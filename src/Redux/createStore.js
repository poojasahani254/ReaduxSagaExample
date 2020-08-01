
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger';


import rootSaga from '../Saga'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})