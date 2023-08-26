import React, { useState } from "react";
import UserEventInfo from "../UserEventInfo/UserEventInfo";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './EventShowItem.css'
import EventAttendeeList from "../Attendees/EventAttendeeList/EventAttendeeList";
import Rsvp from "../Attendees/RSVP/Rsvp";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, updateEvent } from "../../../store/events";
import CommentIndex from "../Comments/CommentIndex/CommentIndex";

function EventShowItem({event}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [parti, setParti] = useState(false);
    const [comments, setComments] = useState(false);
    const [rsvp, setRsvp] = useState(false);
    const [resd, setResd] = useState(false);
    const [editing, setEditing] = useState(false);
    const [location, setLocation] = useState(event.location);
    const [title, setTitle] = useState(event.title);
    const [details, setDetails] = useState(event.details);
    const [date, setDate] = useState(event.date);
    const history = useHistory();
    const eventAttendees = event.attendees;

    function backToIndex() {
        history.push('/')
    }

    const didResQuestionMark = (atts, user) => {
        for (let i = 0; i < atts.length; i++) {
            const attendee = atts[i];
            if (attendee.userId === user.id) {
                setResd(true);
            }
        }
    }

    
    const handleParti = () => {
        if (parti === false){
            setParti(true);
            setComments(false);
            setRsvp(false)
            setEditing(false)
            const gButton = document.querySelector('.show-guests')
                gButton.style.background = 'linear-gradient(45deg, orange, black)';
                gButton.style.color = 'black';
                gButton.style.border = '1px solid black';
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = '';
                cButton.style.color = '';
                cButton.style.border = '';
            if (sessionUser.id === event.userId) {
                const eButton = document.querySelector('.edit-event-button')
                eButton.style.background = '';
                eButton.style.color = '';
                eButton.style.border = '';
            } else {
                const rButton = document.querySelector('.RSVP-button')
                    rButton.style.background = '';
                    rButton.style.color = '';
                    rButton.style.border = '';   
            }
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
            setEditing(false)
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = 'linear-gradient(45deg, orange, black)';
                cButton.style.color = 'black';
                cButton.style.border = '1px solid black';
            const gButton = document.querySelector('.show-guests')
                gButton.style.background = '';
                gButton.style.color = '';
                gButton.style.border = '';
            if (sessionUser.id === event.userId) {
                const eButton = document.querySelector('.edit-event-button')
                    eButton.style.background = '';
                    eButton.style.color = '';
                    eButton.style.border = '';
            } else {
                const rButton = document.querySelector('.RSVP-button')
                    rButton.style.background = '';
                    rButton.style.color = '';
                    rButton.style.border = '';   
            }
        } else {
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = '';
                cButton.style.color = '';
                cButton.style.border = '';
            setComments(false)
        }
    }
    const handleRsvp = () => {
        didResQuestionMark(eventAttendees, sessionUser);
        if (rsvp === false){
            setRsvp(true)
            setParti(false);
            setComments(false);
            const rButton = document.querySelector('.RSVP-button')
                rButton.style.background = 'linear-gradient(45deg, orange, black)';
                rButton.style.color = 'black';
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
    const handleEdit = () =>{
        if (editing === false){
            setEditing(true);
            setComments(false);
            setParti(false);
            const eButton = document.querySelector('.edit-event-button')
                eButton.style.background = 'linear-gradient(45deg, orange, black)';
                eButton.style.color = 'black';
                eButton.style.border = '1px solid black';
            const gButton = document.querySelector('.show-guests')
                gButton.style.background = '';
                gButton.style.color = '';
                gButton.style.border = '';
            const cButton = document.querySelector('.event-comment-button')
                cButton.style.background = '';
                cButton.style.color = '';
                cButton.style.border = '';
        } else {
            const eButton = document.querySelector('.edit-event-button')
                eButton.style.background = '';
                eButton.style.color = '';
                eButton.style.border = '';
            setEditing(false);
        }
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[title]', title);
        formData.append('event[location]', location);
        formData.append('event[details]', details);
        formData.append('event[date]', date);
        formData.append('event[userId]', sessionUser.id );
            dispatch(updateEvent(event, formData)).then(() => history.go(`/events/${event.id}`));
        setEditing(false);
    }
    const handleDelete = () => {
        dispatch(deleteEvent(event.id))
        history.push('/')
    }

    let ness;
    if (parti) {
        ness = (
            <div className="list-hidden-div">
                <EventAttendeeList eventAttendees={eventAttendees}/>
            </div>
        )
    } else if (rsvp && !resd) {
        ness = (
            <div>
                <Rsvp event={event}/>
            </div>
        )
    }  else if (rsvp && resd){
        ness = (
            <div className="list-hidden-div">
                <h1 className="already-rsvp">You Have Already RSVP'd to this event!</h1> 
            </div>
        )
    }else if (comments) {
        ness = (
            <div>
                <CommentIndex/> 
            </div> 
        )
    }
    else {ness = null}

    let marina;
    if (sessionUser.id !== event.userId) {
        marina = (
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
        )
    } else if (sessionUser.id === event.userId && !editing) {
        marina = (
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
                                <button onClick={handleEdit} className="edit-event-button">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {ness}
            </div>
        )
    } else if (sessionUser.id === event.userId && editing) {
        marina = (
            <div className="house">
                <div className="event-show-item-wrapper">
                    <div className="event-show-item-container">
                        <form onSubmit={handleUpdate} className="event-update-form">
                            <div className="event-edit-title-container">
                                <span className="event-title-span">
                                    Event Title:
                                </span>
                                <div
                                    className="edit-event-title"
                                    contentEditable
                                    onInput={(e) => {
                                        setTitle(e.target.innerText)
                                    }}
                                    dangerouslySetInnerHTML={{ __html: event.title }}
                                />
                            </div>    
                            <div className="event-edit-location-container">
                                <span className="event-loc-span">
                                    Event Location:
                                </span>
                                <div
                                    className="edit-event-loc"
                                    contentEditable
                                    onInput={(e) => {
                                        setLocation(e.target.innerText)
                                    }}
                                    dangerouslySetInnerHTML={{ __html: event.location }}
                                />
                            </div>    
                            <div className="event-edit-details-container">
                                <span className="event-details-span">
                                    Event Details:
                                </span>
                                <div
                                    className="edit-event-details"
                                    contentEditable
                                    onInput={(e) => {
                                        setDetails(e.target.innerText)
                                    }}
                                    dangerouslySetInnerHTML={{ __html: event.details }}
                                />
                            </div>    
                            <div className="event-edit-date-container">
                                <span className="event-date-span">
                                    Event Date:
                                </span>
                                <div
                                    className="edit-event-details"
                                    contentEditable
                                    onInput={(e) => {
                                        setDate(e.target.innerText)
                                    }}
                                    dangerouslySetInnerHTML={{ __html: event.date }}
                                />
                            </div>    
                            <div className="edit-event-buttons">
                                <button type="submit" className="update-event-button">Update</button>                            
                                <button className="delete-event-button" onClick={handleDelete}>Delete Event</button>
                            </div>
                        </form>
                    </div>
                </div>
                {ness}
            </div>
        )
    }

    return (
        <> 
        {event ? 
            <>
                {marina}
            </>
        : null}
        </>
    )
}

export default EventShowItem;