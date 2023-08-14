import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserEventInfo from "../UserEventInfo/UserEventInfo";
import './EventIndex.css'
import EventIndexItem from "../EventIndexItem/EventIndexItem";

{/* events filtered by users jammers, as soon as jammers are added in of course. and events. 
first thing i should add in is songs. users have many songs a song can belong to many users, database 
seeded with many common songs, users will seed songs and database will grow. */}

function EventIndex() {
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login'/>

    return (
        <div className="event-index-wrapper">
            <div className="event-index-container">
                <EventIndexItem/>
            </div>
        </div>
    )
}

export default EventIndex;