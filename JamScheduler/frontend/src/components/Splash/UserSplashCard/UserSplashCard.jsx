import React, { useEffect } from "react";
import './UserSplashCard.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../../store/songs";

function UserSplashCard() {
    debugger
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    
    
    const songs = useSelector(state => state.songs)
    const getUserSongs = (ss, user) => {
        let userSongs = [];
        for (let i = 0; i < ss.length; i++) {
            const song = ss[i];
            if (song.userId === user.user.id) {
                userSongs.push(song);
            }
        }
        return userSongs;
    }
    const userSongs = getUserSongs(songs, sessionUser);
    let selectedSongs = []
    for (let i = 0; i < 6; i++) {
        const song = userSongs[i];
        selectedSongs.push(song);
    }

    
    
    return (
        <div className="user-splash-card-wrapper">
            {sessionUser.stageName}
            {/* {selectedSongs.map(song => (
                // <li className="user-splash-songs">{song.songName}</li>
            ))} */}
        </div>
    )
}

export default UserSplashCard;