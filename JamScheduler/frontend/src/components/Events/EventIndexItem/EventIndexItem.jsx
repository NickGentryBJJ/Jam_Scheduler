import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserEventInfo from "../UserEventInfo/UserEventInfo";
import './EventIndexItem.css'

{/* events filtered by users jammers, as soon as jammers are added in of course. and events. 
first thing i should add in is songs. users have many songs a song can belong to many users, database 
seeded with many common songs, users will seed songs and database will grow. */}



function EventIndexItem() {
    return (
        <div className="event-index-item-wrapper">
            <div className="event-index-item-container">
                <div className="user-event-info-cont">
                    <UserEventInfo/>
                </div>
                <h1 className="event-title">Event.Title</h1>
                <h2 className="event-location">Event.Location</h2>
                <p className="event-details">Event.Details</p>
                <span className="event-date">Event.Date</span><br/>
                <button className='event-participant-button'>Show Participants</button>
            </div>
        </div>
    )
}

export default EventIndexItem;