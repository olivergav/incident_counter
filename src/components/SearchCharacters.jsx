import React, {useEffect, useState} from 'react';
import {endpoint} from "../endpoint";
import useThunkReducer from "../hooks/useThunkReducer";
import {ERROR, RESPONSE_COMPLETE} from "../actionTypes";


const SearchCharacters = React.memo(({dispatch}) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        console.log(query)
        const controller = new AbortController();
        const {signal} = controller;

        if (query.length > 3) {

            fetch(endpoint + '/search/' + query, {signal})
                .then((response) => response.json())
                .then((response) => {
                    dispatch({
                        type: RESPONSE_COMPLETE,
                        payload: {result: response.characters}
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: ERROR,
                        payload: {error}
                    })
                })
        }

        return () => {
            controller.abort();

        }
    }, [query, dispatch])


    return (
        <input
            type="search"
            placeholder="Search here"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
        />
    );
})

export default SearchCharacters;