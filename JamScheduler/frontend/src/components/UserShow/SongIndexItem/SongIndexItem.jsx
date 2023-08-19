import React from "react";
import './SongIndexItem.css'

function SongIndexItem(song) {
    return (
        <div className="song-index-item">
            <h1 className="song-title">Title: {song.song.songName}</h1>
            <span className="song-artist">Artist: {song.song.originalArtist}</span>
            <h2 className="desired-instrument">{song.song.user.stageName}'s Preferred Part: {song.song.desiredInstrument}</h2>
        </div>
    )
}

export default SongIndexItem;