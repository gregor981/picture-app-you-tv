import Unsplash, {toJson} from "unsplash-js";
import {USPLASH_ACCESS_KEY} from "../const";

const initState = {
    searchString: "Search",
    imageResults: []
};

const CURRENT_STRING = "CURRENT_STRING";
const SEARCH_IMAGE = "SEARCH_IMAGE";

export const updateString = val => {
    return {type: CURRENT_STRING, payload: val};
};

export const searchImages = val => {
    const unsplash = new Unsplash({
        accessKey: USPLASH_ACCESS_KEY,
        timeout: 500
    });

    return dispatch =>
        unsplash.search
            .photos(val, 1, 40)
            .then(toJson)
            .then(json => {
                return dispatch({
                    type: SEARCH_IMAGE,
                    payload: json.results
                });
            }).catch(e => {
            console.warn(e);
        })
};

export const searchReducer = (
    state = {...initState, error: null},
    action
) => {
    switch (action.type) {
        case CURRENT_STRING:
            return {...state, searchString: action.payload, error: null};
        case SEARCH_IMAGE:
            if (action.payload instanceof Array && action.payload.length > 0) {
                return {...state, imageResults: action.payload, error: null};
            } else {
                return Object.assign({}, state, {
                    error: {
                        code: "INVALID SEARCH TERM",
                        message: "No results found",
                        action
                    }
                });
            }
        default:
            return state;
    }
};
