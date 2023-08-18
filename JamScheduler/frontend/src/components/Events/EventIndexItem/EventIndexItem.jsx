import React from "react";
import UserEventInfo from "../UserEventInfo/UserEventInfo";
import './EventIndexItem.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

{/* events filtered by users jammers, as soon as jammers are added in of course. and events. 
first thing i should add in is songs. users have many songs a song can belong to many users, database 
seeded with many common songs, users will seed songs and database will grow. */}



function EventIndexItem({event}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`events/${event.id}`)
    }

  
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
                    <button onClick={handleClick} className='event-page-button'>View Event Page</button>
                </div>
            </div>
        </div>
    )
}

export default EventIndexItem;