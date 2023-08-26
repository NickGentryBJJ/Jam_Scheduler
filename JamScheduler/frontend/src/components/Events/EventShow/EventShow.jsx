import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EventShow.css'
import { fetchEvent, fetchEvents, getEvent, getEvents } from "../../../store/events";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import EventShowItem from "../EventShowItem/EventShowItem";
import { fetchAttendees } from "../../../store/attendees";
import EventAttendeeList from "../Attendees/EventAttendeeList/EventAttendeeList";

function EventShow() {
    debugger
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])
    const { eventId } = useParams();
    const events = useSelector(state=>state.events);
    // const event = useSelector(getEvent(parseInt(eventId, 10)));
    // const eventSelector = getEvent(parseInt(eventId, 10)); // Call the getEvent selector with the eventId
    // const event = useSelector(eventSelector);

    // let event;

    //     for (let i = 0; i < events.length; i++) {
    //         const fevent = events[i];
    //         if (fevent.id === parseInt(eventId, 10)){
    //             event = fevent;
    //         }
    //     }
    const event = events.find(event => event.id === parseInt(eventId, 10));
        
    
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