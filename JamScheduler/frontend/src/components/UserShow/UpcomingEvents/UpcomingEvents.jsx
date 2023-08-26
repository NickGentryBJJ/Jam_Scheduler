import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendees } from "../../../store/attendees";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './UpcomingEvents.css'

function UpcomingEvents(user) {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchAttendees());
    }, [dispatch]);
    
    const attendees = useSelector(state => state.attendees);
    let userEvents = [];
    for (let i = 0; i < attendees.length; i++) {
        const attendee = attendees[i];
        if (attendee.userId === user.user.user.id && attendee.status === "Going") {
            userEvents.push(attendee.event);
        }
    }
    const handleEventPush = () => {
        history.push()
    }
    
    return (
        <div className="upcoming-events-wrapper">
            <h1 className="upcoming-events-header">Your Upcoming Events</h1>
            {userEvents.map(event=>(
                <div onClick={()=>{history.push(`/events/${event.id}`)}} className="upcoming-event-container">
                    <div className="upcoming-event-title">{event.title}</div>
                    <div className="upcoming-event-date">{event.date}</div>
                </div>
            ))}
        </div>
    )
};
export default UpcomingEvents;