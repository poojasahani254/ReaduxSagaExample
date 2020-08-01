import apisauce from 'apisauce'
let API_URL= ''


const ERRORS = {
    CLIENT_ERROR: 'messages.clientError',
    SERVER_ERROR: 'messages.serverError',
    TIMEOUT_ERROR: 'messages.timeoutError',
    CONNECTION_ERROR: 'messages.connectionError',
    NETWORK_ERROR: 'messages.networkError',
    CANCEL_ERROR: 'messages.cancelError',
    UNKNOWN_ERROR: 'messages.unknownError'
}

const create = (baseURL = API_URL || 'https://newsapi.org/') => {
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // 10 second timeout...
        timeout: 25e3
    })

// add monitor for errors
    api.addMonitor(response => {
        console.log('API RESPONSE', response)
    })

    // add transformer
    api.addResponseTransform(response => {
        try {
            if (!response.ok || !response.data.success) {
                const { problem } = response
                if (!response.data) response.data = {}
                if (!response.data.data) response.data.data = {}
                response.data.error =
                    response.data.message ||
                    response.data.data.message ||
                    ERRORS[problem] ||
                    ERRORS.UNKNOWN_ERROR
            }
        } catch (e) {
            response.data.error = ERRORS.UNKNOWN_ERROR
        }
        console.log('TRANSFORMED response', response)
        return response
    })

    const apis = {}

    //call apis
    apis.getNewsApi = params =>
        api.get('v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc', null)

    return apis
}

// let's return back our create method as the default.
export default {
    create
}
