import React from "react";
import './AttendeeListItem.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { deleteAttendee } from "../../../../store/attendees";

const AttendeeListItem = ({attendee, user, index}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state=> state.session.user)
    const history = useHistory();
    
    const handleUser = () => {
        history.push(`/users/${user.id}`)
    }

    const handleDelete = () => {
        debugger
        dispatch(deleteAttendee(attendee.id))
        history.go();
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
    } else if (attendee.status === "Going" && user.id === sessionUser.id){
        korra = (
            <div style={{ background: 'limegreen' }} className="attendee-list-item-wrapper">
                <ul className="attendee-list-cont" key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                    <div className="mod-buttons">
                        <button onClick={handleDelete} className="delete-status-button">Delete</button>
                        <button className="edit-status-button">Edit</button>
                    </div>
                </ul>
            </div>
        )
    } else if (attendee.status === "Maybe" && user.id === sessionUser.id) {
        korra =(
            <div style={{ background: '#c7c701' }} className="attendee-list-item-wrapper">
                <ul className="attendee-list-cont" key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                    <div className="mod-buttons">
                        <button onClick={handleDelete} className="delete-status-button">Delete</button>
                        <button className="edit-status-button">Edit</button>
                    </div>
                </ul>
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