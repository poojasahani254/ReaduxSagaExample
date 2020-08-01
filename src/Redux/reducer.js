const initialState = {
    news: {},
    data: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'NEWS_RECEIVED':
            return { ...state, news: action.json, loading: false }
        case 'GET_TEST':
            return {...state, loading: true}
        case 'GET_TEST_REC':
                return {...state, data: action.data,loading: false }
        default:
            return state;
    }
};
export default reducer;