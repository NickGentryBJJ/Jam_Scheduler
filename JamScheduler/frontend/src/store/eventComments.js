import csrfFetch from "./csrf";
import { RECEIVE_EVENT } from "./events";

export const RECEIVE_EVENT_COMMENT = 'eventComments/RECEIVE_EVENT_COMMENT';
export const RECEIVE_EVENT_COMMENTS = 'eventComments/RECEIVE_EVENT_COMMENTS';
export const REMOVE_EVENT_COMMENT = 'eventComments/REMOVE_EVENT_COMMENT';

const receiveEventComment = eventComment => ({
    type: RECEIVE_EVENT_COMMENTS,
    eventComment 
});

const receiveEventComments = eventComments => ({
    type: RECEIVE_EVENT_COMMENTS,
    eventComments 
});

const removeEventComment = eventCommentId => ({
    type: REMOVE_EVENT_COMMENT,
    eventCommentId
});

export const getEventComment = eventCommentId => state => {
    return state.eventComments ? state.eventComments[eventCommentId] : null;
}

export const getEventComments = state => {
    return state.eventComments ? Object.values(state.eventComments) : [];
}


export const fetchEventComments = () => async (dispatch) => {
    const response = await fetch ('/api/eventComments');
    if (response.ok) {
        const eventComments = await response.json();
        dispatch(receiveEventComments(eventComments));
    }
};

export const fetchEventComment = eventCommentId => async (dispatch) => {
    
    const response = await fetch (`/api/eventComments/${eventCommentId}`);

    if (response.ok) {
        const eventComment = await response.json();
        dispatch(receiveEventComment(eventComment));
    }
};

export const createEventComment = formData => async (dispatch) =>{
    const response = await csrfFetch(`/api/eventComments`,{
        method: 'POST',
        body: formData
        })
    if(response.ok){
        const eventComment = await response.json()
        dispatch(receiveEventComment(eventComment))
        return eventComment;
    }
}

export const updateeventComment = (eventComment, formData) => async (dispatch) => {
    const response = await csrfFetch(`/api/eventComments/${eventComment.id}`, {
        method: 'PATCH',
        body: formData
    });

    if (response.ok) {
        const eventComment = await response.json();
        dispatch(receiveEventComment(eventComment));
    }
};

export const deleteeventComment = eventCommentId => async (dispatch) => {
    const response = await csrfFetch (`/api/eventComments/${eventCommentId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeEventComment(eventCommentId));
    }
};


const eventCommentsReducer = (state = [], action) => {
    Object.freeze(state);

    const nextState = [...state];

    switch (action.type) {
        case RECEIVE_EVENT_COMMENTS:
            const eventCommentsArray = Object.values(action.eventComments);
            return [...eventCommentsArray];        
        case RECEIVE_EVENT_COMMENT:
            nextState.push(action.eventComment); 
            return nextState;
        case REMOVE_EVENT_COMMENT:
            delete nextState[action.eventCommentId];
            return nextState;
        default:
            return nextState;
    }
};


export default eventCommentsReducer;