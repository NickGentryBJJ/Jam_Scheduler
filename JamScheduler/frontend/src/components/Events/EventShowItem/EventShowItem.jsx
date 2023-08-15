import React from "react";
import UserEventInfo from "../UserEventInfo/UserEventInfo";

function EventShowItem({event}) {
    return (
        <div className="event-index-item-wrapper">
        <div className="top-of-event">
            <UserEventInfo event={event}/> 
            <h1 className="event-title">{event.title}</h1>
        </div>
    <div className="event-index-item-container">
        <div className="event-info-container">
            <h2 className="event-location">Event Location: {event.location}</h2>
            <p className="event-details">{event.details}</p>
            <span className="event-date">{event.date}</span><br/>
        </div>
    </div>
</div>

    )
}

export default EventShowItem;