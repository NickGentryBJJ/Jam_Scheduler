import React from "react";
import './UserEventInfo.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UserEventInfo({event}) {
    const history = useHistory();
    
    const handleUser = () => {
        history.push(`users/${event.user.id}`)
    }

    return (
        <div className="user-event-info-wrapper">
            <img src={event.user.photo} alt="" />
            <h1 className="event-poster-name">
                <span className="event-user-name" onClick={handleUser}>{event.user.stageName}</span> Posted An Event!
            </h1>
        </div>
    )
}

export default UserEventInfo;