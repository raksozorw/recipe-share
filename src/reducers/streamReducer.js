import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    UPLOAD_PHOTO
}
    from '../actions/types';
import _ from 'lodash';



export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, '_id') };
        case FETCH_STREAM:
            return { ...state, [action.payload._id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload._id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case UPLOAD_PHOTO:
            return { ...state, photo: action.payload }
        default:
            return state
    }
}
    
