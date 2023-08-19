import React from "react";
import './UserSplashCard.css';
import { useDispatch, useSelector } from "react-redux";

function UserSplashCard() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs)
    const getUserSongs = (ss, user) => {
        let userSongs = [];
        for (let i = 0; i < ss.length; i++) {
            const song = ss[i];
            if (song.userId === user.id) {
                userSongs.push(song);
            }
        }
        return userSongs;
    }
    const userSongs = getUserSongs(songs, sessionUser);
    let selectedSongs = []
    let waveRace = userSongs.length;
    if (userSongs.length > 6) {
        waveRace = 6
    }
    for (let i = 0; i < waveRace; i++) {
        const song = userSongs[i];
        selectedSongs.push(song);
    }

    
    
    return (
        <>
        {songs ? 
            <div className="user-splash-card-wrapper">
                <h1 className="user-splash-name">Lets Jam {sessionUser.stageName}!</h1>
                
                <ul> <span className="user-splash-songs">Your Song List:</span>
                {selectedSongs.map(song => (
                        <li className="user-splash-song"><span className="user-splash-song-name">{song.songName}</span> <br/><span className="orig-artist-splash">by {song.originalArtist}</span> </li>
                        ))}
                </ul>
            </div>
        : null }
        </>
    )
}

export default UserSplashCard;