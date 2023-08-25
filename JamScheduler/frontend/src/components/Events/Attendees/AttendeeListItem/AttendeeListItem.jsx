import React, { useState } from "react";
import './AttendeeListItem.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { deleteAttendee, updateAttendee } from "../../../../store/attendees";

const AttendeeListItem = ({attendee, user, index}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state=> state.session.user)
    const history = useHistory();
    const [edit, setEdit] = useState(false)
    const [status, setStatus] = useState("")
    
    const handleUser = () => {
        history.push(`/users/${user.id}`)
    }

    const handleDelete = () => {
        dispatch(deleteAttendee(attendee.id))
        history.go();
    }

    const displayEdit = () => {
        setEdit(true)
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('attendee[status]', status);
        formData.append('attendee[eventId]', attendee.eventId );
        formData.append('attendee[userId]', attendee.userId );

        dispatch(updateAttendee(attendee, formData)).then(() => history.go());  
    }

    let korra;
    if (attendee.status === "Going" && user.id !== sessionUser.id){
        korra = (
            <div style={{ background: 'limegreen' }} className="attendee-list-item-wrapper">
                <ul className="attendee-list-cont" key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                </ul>
            </div>
        )
    } else if (attendee.status === "Maybe" && user.id !== sessionUser.id) {
        korra =(
            <div style={{ background: '#c7c701' }} className="attendee-list-item-wrapper">
                <ul className="attendee-list-cont" key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                </ul>
            </div>
        )
    } else if (attendee.status === "Going" && user.id === sessionUser.id && !edit){
        korra = (
            <div style={{ background: 'limegreen' }} className="attendee-list-item-wrapper">
                <ul className="attendee-list-cont" key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                    <div className="mod-buttons">
                        <button onClick={handleDelete} className="delete-status-button">Delete</button>
                        <button onClick={displayEdit} className="edit-status-button">Edit</button>
                    </div>
                </ul>
            </div>
        )
    } else if (attendee.status === "Maybe" && user.id === sessionUser.id && !edit) {
        korra =(
            <div style={{ background: '#c7c701' }} className="attendee-list-item-wrapper">
                <ul className="attendee-list-cont" key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                    <div className="mod-buttons">
                        <button onClick={handleDelete} className="delete-status-button">Delete</button>
                        <button onClick={displayEdit} className="edit-status-button">Edit</button>
                    </div>
                </ul>
            </div>
        )
    } else if (edit) {
        korra =(
            <div style={{ background: 'magenta' }} className="attendee-list-item-wrapper">
                <form 
                className="attendee-list-cont" 
                key={index}
                onSubmit={handleEdit}
                >
                    <label>Going
                        <input type="radio" name="Going" onClick={()=>{setStatus("Going")}}/>
                    </label>
                    <label>Maybe
                        <input type="radio" name="Maybe" onClick={()=>{setStatus("Maybe")}}/>
                    </label>
                    <div className="mod-buttons">
                        <button onClick={()=> {setEdit(false)}} className="delete-status-button">Cancel</button>
                        <button type="submit" className="edit-status-button">Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <>
            {korra}
        </>
    )
}

export default AttendeeListItem;