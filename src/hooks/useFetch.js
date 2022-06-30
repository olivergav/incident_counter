import {useEffect, useReducer,} from "react";
import {fetchReducer} from "../fetchReducer";
import {ERROR, FETCHING, RESPONSE_COMPLETE} from "../actionTypes";
import {endpoint} from "../endpoint";
import useThunkReducer from "./useThunkReducer";


const fetchCharacters = (dispatch) => {
    console.log('Fetching');

    dispatch({type: FETCHING});

    fetch(endpoint + '/characters')
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: RESPONSE_COMPLETE,
                payload: {
                    result: data.characters
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: ERROR,
                payload: {error}
            })
        })
}



const useFetch = (url, formatData = (data) => data) => {
    const [state, dispatch] = useThunkReducer(fetchReducer, []);


    useEffect(() => {
        dispatch(fetchCharacters)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    const {result, loading, error} = state
    return [result, dispatch, loading, error]
}

export default useFetch;