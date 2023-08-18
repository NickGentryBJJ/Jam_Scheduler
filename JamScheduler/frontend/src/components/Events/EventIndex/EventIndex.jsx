import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './EventIndex.css'
import EventIndexItem from "../EventIndexItem/EventIndexItem";
import { getEvents, fetchEvents } from '../../../store/events';
import {fetchUsers} from '../../../store/users'
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";


{/* events filtered by users jammers, as soon as jammers are added in of course. and events. 
first thing i should add in is songs. users have many songs a song can belong to many users, database 
seeded with many common songs, users will seed songs and database will grow. */}

function EventIndex() {
    const events = [...useSelector(getEvents)].reverse()
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        dispatch(fetchEvents())
        dispatch(fetchUsers())
    }, [dispatch])

    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login'/>

    const handleEvent = () => {
        history.push('/events')
    }

    return (
        <div className="event-index-wrapper">
                <button onClick={handleEvent} className='create-event-button'>
                    Create An Event!
                </button>
            
            <div className="event-index-container">
                {events.map(event => (
                    <EventIndexItem event={event} key={event.id}/>
                ))}
            </div>
        </div>
    )
}

export default EventIndex;