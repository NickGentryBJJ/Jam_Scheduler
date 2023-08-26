import csrfFetch from "./csrf";

export const RECEIVE_EVENT = 'events/RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'events/RECEIVE_EVENTS';
export const REMOVE_EVENT = 'events/REMOVE_EVENT';

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event 
});

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events 
});

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
});

export const getEvent = eventId => state => {
    return state.events ? state.events[eventId] : null;
}

export const getEvents = state => {
    return state.events ? Object.values(state.events) : [];
}


export const fetchEvents = () => async (dispatch) => {
    const response = await fetch ('/api/events');
    if (response.ok) {
        const events = await response.json();
        dispatch(receiveEvents(events));
    }
};

export const fetchEvent = eventId => async (dispatch) => {
    const response = await fetch (`/api/events/${eventId}`);

    if (response.ok) {
        const event = await response.json();
        dispatch(receiveEvent(event));
    }
};

export const createEvent = formData => async (dispatch) =>{
    const response = await csrfFetch(`/api/events`,{
        method: 'POST',
        body: formData
        })
    if(response.ok){
        const event = await response.json()
        dispatch(receiveEvent(event))
        return event;
    }
}

export const updateEvent = (event, formData) => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${event.id}`, {
        method: 'PATCH',
        body: formData
    });

    if (response.ok) {
        const event = await response.json();
        dispatch(receiveEvent(event));
    }
};

export const deleteEvent = eventId => async (dispatch) => {
    const response = await csrfFetch (`/api/events/${eventId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeEvent(eventId));
    }
};

const eventsReducer = (state = [], action) => {
    Object.freeze(state);

    const nextState = [ ...state ];

    switch (action.type) {
        case RECEIVE_EVENTS:
            return [ ...action.events ]
        case RECEIVE_EVENT:
            nextState[action.event.id] = action.event;
            return nextState;
        case REMOVE_EVENT:
            delete nextState[action.eventId];
            return nextState;
        default:
            return nextState;
    }
};


export default eventsReducer;