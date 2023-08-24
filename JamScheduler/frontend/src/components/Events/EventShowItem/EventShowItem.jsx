import React, { useState } from "react";
import UserEventInfo from "../UserEventInfo/UserEventInfo";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './EventShowItem.css'
import EventAttendeeList from "../Attendees/EventAttendeeList/EventAttendeeList";

function EventShowItem({event}) {
    const [parti, setParti] = useState(false)
    const history = useHistory();

    function backToIndex() {
        history.push('/')
    }

    const handleClick = () => {
        if (parti === false){
            setParti(true)
        } else {
            setParti(false)
        }
    }
    let ness;

    if (parti) {
        ness = (
            <div>
                <EventAttendeeList eventAttendees={event.attendees}/>
            </div>
        )
    } else (ness = null)


    return (
        <>
        {event ? 
        <div className="house">
            <div className="event-show-item-wrapper">
                <div className="top-of-event">
                    <UserEventInfo event={event}/> 
                    <h1 className="event-title">{event.title}</h1>
                </div>
                <div className="event-show-item-container">
                    <div className="event-info-container">
                        <h2 className="event-location">Event Location: {event.location}</h2>
                        <p className="event-details">{event.details}</p>
                        <span className="event-date">{event.date}</span><br/>
                        <div className="event-buttons">
                            <button onClick={backToIndex} className="back-to-index-button">Back To All Events</button>
                            <button onClick={handleClick} className="show-guests">Show Guests</button>
                            <button className="event-comment-button">Add Comment</button>
                        </div>
                    </div>
                </div>
            </div>
            {ness}
        </div>
        
        : null}
        </>
    )
}

export default EventShowItem;