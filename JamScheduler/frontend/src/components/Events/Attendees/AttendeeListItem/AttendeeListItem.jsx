import React from "react";
import './AttendeeListItem.css'

const AttendeeListItem = ({attendee, user, index}) => {
    return (
        <div className="attendee-list-item-wrapper">
            <ul key={index}>
                <li>Attendee Stage Name: {user.stageName}</li>
                <li>RSVP Status: {attendee.status}</li>
            </ul>
        </div>
    
    )
}

export default AttendeeListItem;