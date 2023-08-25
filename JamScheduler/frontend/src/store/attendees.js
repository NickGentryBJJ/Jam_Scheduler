import csrfFetch from "./csrf";
import { RECEIVE_EVENT } from "./events";

export const RECEIVE_ATTENDEE = 'attendees/RECEIVE_ATTENDEE';
export const RECEIVE_ATTENDEES = 'attendees/RECEIVE_ATTENDEES';
export const REMOVE_ATTENDEE = 'attendees/REMOVE_ATTENDEE';

const receiveAttendee = attendee => ({
    type: RECEIVE_ATTENDEE,
    attendee 
});

const receiveAttendees = attendees => ({
    type: RECEIVE_ATTENDEES,
    attendees 
});

const removeAttendee = attendeeId => ({
    type: REMOVE_ATTENDEE,
    attendeeId
});

export const getAttendee = attendeeId => state => {
    return state.attendees ? state.attendees[attendeeId] : null;
}

export const getAttendees = state => {
    return state.attendees ? Object.values(state.attendees) : [];
}


export const fetchAttendees = () => async (dispatch) => {
    const response = await fetch ('/api/attendees');
    if (response.ok) {
        const attendees = await response.json();
        dispatch(receiveAttendees(attendees));
    }
};

export const fetchAttendee = attendeeId => async (dispatch) => {
    
    const response = await fetch (`/api/attendees/${attendeeId}`);

    if (response.ok) {
        const attendee = await response.json();
        dispatch(receiveAttendee(attendee));
    }
};

export const createAttendee = formData => async (dispatch) =>{
    const response = await csrfFetch(`/api/attendees`,{
        method: 'POST',
        body: formData
        })
    if(response.ok){
        const attendee = await response.json()
        dispatch(receiveAttendee(attendee))
        return attendee;
    }
}

export const updateAttendee = (attendee, formData) => async (dispatch) => {
    const response = await csrfFetch(`/api/attendees/${attendee.id}`, {
        method: 'PATCH',
        body: formData
    });

    if (response.ok) {
        const attendee = await response.json();
        dispatch(receiveAttendee(attendee));
    }
};

export const deleteAttendee = attendeeId => async (dispatch) => {
    const response = await csrfFetch (`/api/attendees/${attendeeId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeAttendee(attendeeId));
    }
};


const attendeesReducer = (state = [], action) => {
    Object.freeze(state);

    const nextState = [...state];

    switch (action.type) {
        case RECEIVE_ATTENDEES:
            const attendeesArray = Object.values(action.attendees);
            return [...attendeesArray];        
        case RECEIVE_ATTENDEE:
            nextState.push(action.attendee); 
            return nextState;
        case REMOVE_ATTENDEE:
            delete nextState[action.attendeeId];
            return nextState;
        default:
            return nextState;
    }
};


export default attendeesReducer;