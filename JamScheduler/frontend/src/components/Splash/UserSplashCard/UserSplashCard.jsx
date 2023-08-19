import React from "react";
import './UserSplashCard.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function UserSplashCard() {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

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
    const userSongs = getUserSongs(songs, sessionUser).reverse();
    let selectedSongs = []
    let waveRace = userSongs.length;
    // waveRace is max songs. But I was listening to waveRace64 music when i was coding this. Jam On! #bannanable
    if (userSongs.length > 7) {
        waveRace = 7
    }
    for (let i = 0; i < waveRace; i++) {
        const song = userSongs[i];
        selectedSongs.push(song);
    }
    
    return (
        <>
        {songs ? 
            <div className="user-splash-card-wrapper">
                <h1 className="user-splash-name">Lets Jam <span className="user-splash-click-name" onClick={() => {history.push(`/users/${sessionUser.id}`)}}>{sessionUser.stageName}</span>!</h1>
                
                <ul> <span className="user-splash-songs">Your Newest Songs:</span>
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