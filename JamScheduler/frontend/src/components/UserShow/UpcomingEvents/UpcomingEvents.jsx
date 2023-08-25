import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendees } from "../../../store/attendees";

function UpcomingEvents(user) {
    debugger
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAttendees())
    }, [dispatch])
    
    const attendees = useSelector(state => state.attendees);
        let userEvents = []
        for (let i = 0; i < attendees.length; i++) {
            const attendee = attendees[i];
            if (attendee.userId === user.user.user.id) {
                userEvents.push(attendee.event);
            }
        }
    

    return (
        <div className="upcoming-events-wrapper">
            {userEvents.map(event=>(
                <div>{event.title}</div>
            ))}
        </div>
    )
};
export default UpcomingEvents;