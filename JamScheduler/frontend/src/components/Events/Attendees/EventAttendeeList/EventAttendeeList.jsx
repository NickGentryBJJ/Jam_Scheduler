import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUser } from '../../../../store/users';
import AttendeeListItem from '../AttendeeListItem/AttendeeListItem';
import './EventAttendeeList.css'


function EventAttendeeList({ eventAttendees }) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        eventAttendees.forEach(attendee => {
        dispatch(fetchUser(attendee.userId));
        });
    }, [eventAttendees, dispatch]);
    return (
        <div className='attendee-list-wrapper'>
                <h1 className='list-head'>Attendee List</h1>
            <div className='list-att-header'>
            {eventAttendees.map((attendee, index) => {
            console.log(attendee.event)
                const user = users[attendee.userId]
                if (user) {
                    return (
                        <AttendeeListItem attendee={attendee} user={user} index={index} />
                        );
                    } else {
                        return null; 
                    }
                })}
            </div>
        </div>
    );
}

export default EventAttendeeList;
