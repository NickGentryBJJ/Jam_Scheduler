import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent} from '../../../store/events'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './CreateEvent.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createAttendee } from '../../../store/attendees';



export default function CreateEvent() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[title]', title);
        formData.append('event[location]', location);
        formData.append('event[details]', details);
        formData.append('event[date]', date);
        formData.append('event[userId]', sessionUser.id );

        // const aFormData = new FormData();
        // aFormData.append('attendee[status]', "Going");
        // aFormData.append('attendee[userId]', sessionUser.id );
        // aFormData.append('attendee[eventId]', eventId);
        
        dispatch(createEvent(formData)).then(() => history.push('/'));    
        // dispatch(createAttendee(aFormData))
        
    }    
    if (!sessionUser) return <Redirect to='/login' />
    
    
    return (
    <div className='create-event-wrapper'>
        <div className='create-event-container'>
            <h1 className='create-event-header'>Create Event Posting!</h1>
            <form onSubmit={handleSubmit} className="create-event-form">
                    <div className="event-label-container">
                        <label className='create-event-title'>
                            <textarea
                                placeholder='What is the name of this event?'
                                className='create-event-name-text'
                                type='textarea'
                                value={title}
                                onInput={(e) => {
                                    setTitle(e.target.value)
                                }}
                                required
                            ></textarea>
                        </label>
                        <label className='create-event-loc'>
                            <textarea
                                placeholder='Where will this event be held?'
                                className='create-event-loc-text'
                                type='textarea'
                                value={location}
                                onInput={(e) => {
                                    setLocation(e.target.value)
                                }}
                                required
                            ></textarea>
                        </label>
                        <label className='create-event-label'>
                            <textarea
                                placeholder='What do you have planned for this event?'
                                className='create-event-text'
                                type='textarea'
                                value={details}
                                onInput={(e) => {
                                    setDetails(e.target.value)
                                }}
                                required
                            ></textarea>
                        </label>
                        <label className='create-event-date'>
                            <textarea
                                placeholder="2023-09-25"
                                className='create-event-date-area'
                                type='textarea'
                                value={date}
                                onInput={(e) => {
                                    setDate(e.target.value)
                                }}
                                required
                            ></textarea>
                        </label>
                        <button className='event-button' type='submit' >Create Event</button>
                    </div>
            </form >
        </div >
    </div>
        
    )
}