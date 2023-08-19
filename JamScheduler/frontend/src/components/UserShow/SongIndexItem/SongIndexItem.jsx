import React, { useState } from "react";
import './SongIndexItem.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "../../../store/songs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SongIndexItem(song) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();
    const handleDelete = () => {
        dispatch(deleteSong(song.song.id));
        history.go();
    }


    // smash remix!!! this variable returns a song item containing a delete and edit button depending 
    // on the user associated with the song. pretty neat!
    
    let remix;
    if (song.song.userId === sessionUser.id) {
        remix = (
        <div className="song-index-item">
            <div className="wrapper-song">
                <div className="song-info">
                    <h1 className="song-title">
                        {song.song.songName}
                    </h1>
                    <span className="song-artist">
                        <span className="artist-span">
                            Artist:
                        </span> {song.song.originalArtist}
                    </span>
                    <h2 className="desired-instrument">
                        <span className="inst-span">
                            {song.song.user.stageName}'s Preferred Part:
                        </span> {song.song.desiredInstrument}
                    </h2>
                </div>
                <div className="mod-menue">
                    <button className="edit-song-button">Edit</button>
                    <button onClick={handleDelete} className="delete-song-button">Delete</button>
                </div>
            </div>
        </div>
        )
    } else {
        remix = (
        <div className="song-index-item">
            <h1 className="song-title">{song.song.songName}</h1>
            <span className="song-artist"><span className="artist-span">Artist:</span> {song.song.originalArtist}</span>
            <h2 className="desired-instrument"><span className="inst-span">{song.song.user.stageName}'s Preferred Part:</span> {song.song.desiredInstrument}</h2>
        </div>
        )
    }
    return (
        <>
            {remix}
        </>
    )
}

export default SongIndexItem;