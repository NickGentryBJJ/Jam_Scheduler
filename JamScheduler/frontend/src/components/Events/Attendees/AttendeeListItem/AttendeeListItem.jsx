import React from "react";
import './AttendeeListItem.css'

const AttendeeListItem = ({attendee, user, index}) => {
    return (
        <div className="attendee-list-item-wrapper">
            <ul key={index}>
                <li>{user.stageName}</li>
                <li>{attendee.status}</li>
            </ul>
        </div>
    
    )
}

export default AttendeeListItem;