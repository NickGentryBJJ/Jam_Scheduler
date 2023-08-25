import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUser } from '../../../../store/users';
import AttendeeListItem from '../AttendeeListItem/AttendeeListItem';
import './EventAttendeeList.css'


function EventAttendeeList({ eventAttendees }) {
    debugger
    const dispatch = useDispatch();

    useEffect(() => {
        eventAttendees.forEach(attendee => {
        dispatch(fetchUser(attendee.userId));
        });
    }, [eventAttendees, dispatch]);

    const users = useSelector(state => state.users);

    return (
        <div className='attendee-list-wrapper'>
            <h1 className='guest-list-header'>Event Guest List</h1>
            {eventAttendees.map((attendee, index) => {
            const user = users[attendee.userId]
            if (user) {
            return (
                <AttendeeListItem attendee={attendee} user={user} index={index}/>
            );
            } else {
            return null; 
        }
        })}
        </div>
    );
}

export default EventAttendeeList;
