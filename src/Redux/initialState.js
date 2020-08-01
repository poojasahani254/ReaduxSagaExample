import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    getNews: ['data'],
    setNews: ['Item'],
})

export const AppConfigTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
    news: {}
})

export const setNews = (state, { Item }) => {
    return state.merge({ Item })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_NEWS]: setNews
})