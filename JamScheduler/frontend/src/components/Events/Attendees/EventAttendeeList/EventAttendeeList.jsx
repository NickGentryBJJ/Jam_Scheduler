import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../store/users';
 

function EventAttendeeList({ eventAttendees }) {
    debugger
    const dispatch = useDispatch();

    useEffect(() => {
        eventAttendees.forEach(attendee => {
        dispatch(getUser(attendee.userId));
        });
    }, [eventAttendees, dispatch]);

    const users = useSelector(state => state.users);

    return (
        <div>
            {eventAttendees.map((attendee, index) => {
            const user = users[attendee.userId]
            if (user) {
            return (
                <div key={index}>
                    {user.stageName}
                </div>
            );
            } else {
            return null; 
        }
        })}
        </div>
    );
}

export default EventAttendeeList;
