import React, { useState } from "react";
import './Rsvp.css'
import { useDispatch, useSelector } from "react-redux";
import { createAttendee } from "../../../../store/attendees";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Rsvp = ({event}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [status, setStatus] = useState("");
    const eventId = event.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('attendee[status]', status);
        formData.append('attendee[eventId]', eventId);
        formData.append('attendee[userId]', sessionUser.id );
        dispatch(createAttendee(formData)).then(() => history.go());    
    }
    return (
        <div className="rsvp-wrapper">
            <form 
            onSubmit={handleSubmit}
            className="rsvp-form"
            >
                <label className="rsvp-label"><span className="going-span">Going</span>   <input type="radio" name="Going" onClick={()=>{setStatus("Going")}}/>
                </label>
                <label className="rsvp-label">Maybe
                    <input type="radio" name="Maybe" onClick={()=>{setStatus("Maybe")}}/>
                </label>
                <button className="rsvp-button-commit" type="submit">RSVP</button>
            </form>
        </div>
    )
}

export default Rsvp;