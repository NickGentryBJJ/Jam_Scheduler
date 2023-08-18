import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, fetchEvent, createEvent, updateEvent} from '../../../store/events'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './CreateEvent.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function CreateEvent() {
    const history = useHistory();
    const { eventId } = useParams();
    let event = useSelector(getEvent(eventId));
    const formType = eventId ? 'Update Event' : 'Create Event';
    const buttonText = eventId ? "Edit" : "Create"
    const dispatch = useDispatch();
    const [photoFile, setPhotoFile] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    
    if (formType === 'Create Event') {
        event = {
            title: '',
            details: '',
            date: ''
        }
    }
    
    const sessionUser = useSelector(state => state.session.user)
    useEffect(() => {
        if (formType === 'Update Event'){
            dispatch(fetchEvent(eventId))
        }
    }, [])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[title]', title);
        formData.append('event[location]', location);
        formData.append('event[details]', details);
        formData.append('event[date]', date);
        formData.append('event[userId]', sessionUser.id );


        if (photoFile) {
            formData.append('event[photo]', photoFile);
        }
        
        
        if (formType === 'Create Event') {
            dispatch(createEvent(formData)).then(() => history.push('/'));    
        } else {
            dispatch(updateEvent(event, formData)).then(() => history.push('/'));
        }
        
    }

    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        setPhotoFile(file);
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result);
        }  else setPhotoUrl(null);
    }
    
    
    
    
    if (!sessionUser) return <Redirect to='/login' />
    return (
        <div className='create-event-container'>
            <div className="create-event-user-container">
                {/* <img className="profile-image" src={sessionUser.photo}></img> */}
                <span className="create-event-first-name">{sessionUser.stageName}</span>
            </div>
            <form onSubmit={handleSubmit} className="create-event-form">
                <div>
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
                            {/* <input type="file" onChange={handleFile} /> */}
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
                            {/* <input type="file" onChange={handleFile} /> */}
                        </label>
                        <button className='event-button' type='submit' >{buttonText}</button>
                    </div>
                </div>
            </form >
        </div >
    )
}