import { takeLatest, all } from 'redux-saga/effects';
import {helloSaga,fetchNews} from './sagas';

function* actionWatcher() {
    debugger
    yield takeLatest('GET_NEWS', fetchNews)
    yield takeLatest('GET_TEST', helloSaga)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}