import {ERROR, FETCHING, RESPONSE_COMPLETE} from "./actionTypes";

export const fetchReducer = (state, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                result: null,
                loading: true,
                error: null
            }
        case ERROR:
            return {
                result: action.payload.result || [],
                loading: false,
                error: action.payload.error
            }
        case RESPONSE_COMPLETE:
            return {
                result: action.payload.result,
                loading: false,
                error: null
            }
        default:
            return state
    }
}

