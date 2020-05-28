import {
    SIGN_IN, SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
}
    from './types';
import streams from '../apis/streams'
import history from '../history'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}


export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId});
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/')
};

//streams.post puts our stream, that is entered through our component form, into our JSON server api
// we then, I think, get a response from the api with the object we created, confirming it is in the api. 
// we use that response to update our state (action creator -> reducer -> state) it's very roundabout...

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data })
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data })
    history.push('/')
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/')
};
// redux thunk is being used for async actions. The other action creators are very simple and don't
// invovle making any API requests. Their dispatch is within the connect function. 

// ok next I believe we are going to make our reducers... the createStream reducer will interpret the res.data and
// use it to update the state of the redux store. The state will probably start off as an empty array,
// no streams no data. We will be adding objects to that array. Then we'll pass them back as props to
// the stream list component which will render them for the user.... woah I think I get it 