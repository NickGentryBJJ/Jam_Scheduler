import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './EventIndex.css'
import EventIndexItem from "../EventIndexItem/EventIndexItem";
import { getEvents, fetchEvents } from '../../../store/events';
import {fetchUsers} from '../../../store/users'


{/* events filtered by users jammers, as soon as jammers are added in of course. and events. 
first thing i should add in is songs. users have many songs a song can belong to many users, database 
seeded with many common songs, users will seed songs and database will grow. */}

function EventIndex() {
    const events = [...useSelector(getEvents)].reverse()
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchEvents())
        dispatch(fetchUsers())
    }, [dispatch])

    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login'/>

    return (
        <div className="event-index-wrapper">
            <div className="event-index-container">
                {events.map(event => (
                    <EventIndexItem event={event} key={event.id}/>
                ))}
            </div>
        </div>
    )
}

export default EventIndex;