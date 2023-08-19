import React from "react";
import './SongIndexItem.css'

function SongIndexItem(song) {
    return (
        <div className="song-index-item">
            <h1 className="song-title">{song.song.songName}</h1>
            <span className="song-artist"><span className="artist-span">Artist:</span> {song.song.originalArtist}</span>
            <h2 className="desired-instrument"><span className="inst-span">{song.song.user.stageName}'s Preferred Part:</span> {song.song.desiredInstrument}</h2>
        </div>
    )
}

export default SongIndexItem;