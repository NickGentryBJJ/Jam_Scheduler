import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EventShow.css'
import { fetchEvent, fetchEvents, getEvent } from "../../../store/events";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import EventShowItem from "../EventShowItem/EventShowItem";
import { fetchAttendees } from "../../../store/attendees";
import EventAttendeeList from "../Attendees/EventAttendeeList/EventAttendeeList";

function EventShow() {
    debugger
    const { eventId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])

    const events = useSelector(state => state.events);
    const event = events[eventId - 1]


    
    return (
        <>
        {event ? 
            <div className="event-show-wrapper">
                <EventShowItem event={event}/>
            </div>
        : null}
        </>
    )
}

export default EventShow;