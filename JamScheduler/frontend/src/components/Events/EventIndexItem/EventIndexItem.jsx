import React from "react";
import UserEventInfo from "../UserEventInfo/UserEventInfo";
import './EventIndexItem.css'

{/* events filtered by users jammers, as soon as jammers are added in of course. and events. 
first thing i should add in is songs. users have many songs a song can belong to many users, database 
seeded with many common songs, users will seed songs and database will grow. */}



function EventIndexItem({event}) {
    return (
        <div className="event-index-item-wrapper">
            <div className="event-index-item-container">
                <div className="user-event-info-cont">
                    <UserEventInfo/>
                </div>
                <h1 className="event-title">{event.title}</h1>
                <h2 className="event-location">{event.location}</h2>
                <p className="event-details">{event.details}</p>
                <span className="event-date">{event.date}</span><br/>
                <button className='event-participant-button'>Show Participants</button>
            </div>
        </div>
    )
}

export default EventIndexItem;