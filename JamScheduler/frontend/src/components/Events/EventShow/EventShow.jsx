import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EventShow.css'
import { fetchEvent, getEvent } from "../../../store/events";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function EventShow() {
    debugger
    const { eventId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvent(eventId))
    }, [dispatch, eventId])

    return (
        <div className="event-show-wrapper">
            Hello From Event Show!
        </div>
    )
}

export default EventShow;