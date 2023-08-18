import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import EventIndex from "../Events/EventIndex/EventIndex";
import './Splash.css';
import UserSplashCard from "./UserSplashCard/UserSplashCard";
import { fetchSongs } from "../../store/songs";
import { fetchEvents } from "../../store/events";
import { fetchUsers } from "../../store/users";

function Splash() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvents())
        dispatch(fetchUsers())
        dispatch(fetchSongs())
    }, [dispatch])
    return (
        <div className="splash-wrapper">
            {/* <UserSplashCard/> */}
            <EventIndex/>
        </div>
    )
}

export default Splash;