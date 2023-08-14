import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import EventIndex from "../Events/EventIndex/EventIndex";
import './Splash.css';

function Splash() {
    return (
        <div className="splash-wrapper">
            <EventIndex/>
        </div>
    )
}

export default Splash;