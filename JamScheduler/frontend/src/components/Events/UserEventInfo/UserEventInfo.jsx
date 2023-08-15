import React from "react";
import './UserEventInfo.css';

function UserEventInfo({event}) {

    return (
        <div className="user-event-info-wrapper">
            <span className="event-poster-name">
                {event.user.stageName} Posted An Event!
            </span>
        </div>
    )
}

export default UserEventInfo;