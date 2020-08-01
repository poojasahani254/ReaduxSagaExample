import {put,call} from "redux-saga/effects";
import services from '../Redux/APIIndex';
import { path } from 'ramda'

const {API} = services

export function* helloSaga() {
    try{
        console.log('Hello Test Sagas!')
        let msg = 'MESSAGE FROM TEST SAGA'
        yield put({ type: "GET_TEST_REC", data: msg })
    }catch (e) {
        console.log('error',e)
    }

}

export function* fetchNews() {
    const apicall = yield call(API.getNewsApi)
    const response = path(['data'], apicall)
    if (apicall.ok) {
        // yield put(setNews(response.articles))
        yield put({ type: "NEWS_RECEIVED", json: response.articles })
    }
}
