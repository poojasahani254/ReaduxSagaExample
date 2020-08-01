
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger';


import rootSaga from '../Saga'
import reducers from '../Redux/indexReducers'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})