import React, { useState } from "react";
import UserEventInfo from "../UserEventInfo/UserEventInfo";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './EventShowItem.css'
import EventAttendeeList from "../Attendees/EventAttendeeList/EventAttendeeList";
import Rsvp from "../Attendees/RSVP/Rsvp";

function EventShowItem({event}) {
    const [parti, setParti] = useState(false)
    const [comments, setComments] = useState(false)
    const [rsvp, setRsvp] = useState(false)
    const history = useHistory();
    debugger
    const eventAttendees = event.attendees

    function backToIndex() {
        history.push('/')
    }

    const handleParti = () => {
        if (parti === false){
            setParti(true);
            setComments(false);
            setRsvp(false)
            const gButton = document.querySelector('.show-guests')
                gButton.style.background = 'linear-gradient(45deg, green, black)';
                gButton.style.color = 'white';
                gButton.style.border = '1px solid black';
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = '';
                cButton.style.color = '';
                cButton.style.border = '';
            const rButton = document.querySelector('.RSVP-button')
                rButton.style.background = '';
                rButton.style.color = '';
                rButton.style.border = '';
        } else {
            setParti(false)
            const gButton = document.querySelector('.show-guests')
                gButton.style.background = '';
                gButton.style.color = '';
                gButton.style.border = '';
        }
    }
    const handleComment = () => {
        if (comments === false){
            setComments(true);
            setParti(false);
            setRsvp(false)
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = 'linear-gradient(45deg, green, black)';
                cButton.style.color = 'white';
                cButton.style.border = '1px solid black';
            const gButton = document.querySelector('.show-guests')
                gButton.style.background = '';
                gButton.style.color = '';
                gButton.style.border = '';
            const rButton = document.querySelector('.RSVP-button')
                rButton.style.background = '';
                rButton.style.color = '';
                rButton.style.border = '';
        } else {
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = '';
                cButton.style.color = '';
                cButton.style.border = '';
            setComments(false)
        }
    }
    const handleRsvp = () => {
        if (rsvp === false){
            setRsvp(true)
            setParti(false);
            setComments(false);
            const rButton = document.querySelector('.RSVP-button')
                rButton.style.background = 'linear-gradient(45deg, green, black)';
                rButton.style.color = 'white';
                rButton.style.border = '1px solid black';
            const gButton = document.querySelector('.show-guests')
                gButton.style.background = '';
                gButton.style.color = '';
                gButton.style.border = '';
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = '';
                cButton.style.color = '';
                cButton.style.border = '';
        } else {
            setRsvp(false)
            const rButton = document.querySelector('.RSVP-button')
                rButton.style.background = '';
                rButton.style.color = '';
                rButton.style.border = '';
        }
    }
    let ness;

    if (parti) {
        ness = (
            <div>
                <EventAttendeeList eventAttendees={eventAttendees}/>
            </div>
        )
    } else if (rsvp) {
        ness = (
            <div>
                <Rsvp event={event}/>
            </div>
        )
    }  else if (comments) {
        ness = (
            <div>
                {/* <CommentIndex/> */}
            </div>
        )
    }
    else {ness = null}


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
                            <button onClick={handleParti} className="show-guests">Show Guests</button>
                            <button onClick={handleComment} className="event-comment-button">Add Comment</button>
                            <button onClick={handleRsvp} className="RSVP-button">RSVP</button>
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