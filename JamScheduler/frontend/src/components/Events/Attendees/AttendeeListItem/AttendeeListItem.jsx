import React from "react";
import './AttendeeListItem.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AttendeeListItem = ({attendee, user, index}) => {
    const history = useHistory();
    
    const handleUser = () => {
        history.push(`/users/${user.id}`)
    }

    // if (attendee.status === "Going"){
    //     const gButton = document.querySelector('.attendee-list-item-wrapper')
    //     gButton.style.background = 'limegreen';
    // } else {
    //     const gButton = document.querySelector('.attendee-list-item-wrapper')
    //     gButton.style.background = '#cbcb00';
    // }
    let korra;
    if (attendee.status === "Going"){
        korra = (
            <div style={{ background: 'limegreen' }} className="attendee-list-item-wrapper">
                <ul key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                </ul>
            </div>
        )
    } else {
        korra =(
            <div style={{ background: 'yellow' }} className="attendee-list-item-wrapper">
                <ul key={index}>
                    <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
                    <li>Status: {attendee.status}</li>
                </ul>
            </div>
        )
    }
    // <div style={{ background: 'yellow' }} className="attendee-list-item-wrapper">
    //     <ul key={index}>
    //         <li className="user-att-name" onClick={handleUser}>{user.stageName}</li>
    //         <li>Status: {attendee.status}</li>
    //     </ul>
    // </div>
    return (
        <>
        {korra}
        </>
    )
}

export default AttendeeListItem;