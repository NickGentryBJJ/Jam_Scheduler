import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EventShow.css'
import { fetchEvent, fetchEvents, getEvent } from "../../../store/events";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import EventShowItem from "../EventShowItem/EventShowItem";

function EventShow() {
    const { eventId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvent(eventId))
    }, [dispatch, eventId])
    
    const events = useSelector(state => state.events);
    const event = events[eventId]
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