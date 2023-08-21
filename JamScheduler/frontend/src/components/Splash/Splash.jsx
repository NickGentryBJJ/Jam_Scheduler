import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import EventIndex from "../Events/EventIndex/EventIndex";
import './Splash.css';
import UserSplashCard from "./UserSplashCard/UserSplashCard";
import { fetchSongs } from "../../store/songs";
import { fetchEvents } from "../../store/events";
import { fetchUsers } from "../../store/users";
import AboutJamTime from "./AboutJamTime/AboutJameTime";

function Splash() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvents())
        dispatch(fetchUsers())
        dispatch(fetchSongs())
    }, [dispatch])
    if (!sessionUser) return <Redirect to='/login'/>

    return (
        <div className="splash-wrapper">
            <EventIndex/>
            <UserSplashCard/>
            {/* <AboutJamTime/> */}
        </div>
    )
}

export default Splash;