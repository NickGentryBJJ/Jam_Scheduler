import React from "react";
import './UserEventInfo.css';

function UserEventInfo({event}) {

    return (
        <div className="user-event-info-wrapper">
            <img src={event.user.photo} alt="" />
            <span className="event-poster-name">
                {event.user.stageName} Posted An Event!
            </span>
        </div>
    )
}

export default UserEventInfo;