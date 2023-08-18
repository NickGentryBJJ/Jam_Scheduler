import React from "react";

function SongIndexItem(song) {
    debugger
    return (
        <div className="song-index-item">
            <h1 className="song-title">{song.song.songName} <span>by {song.song.originalArtist}</span></h1>
            <h2 className="desired-instrument">{song.song.desiredInstrument}</h2>
        </div>
    )
}

export default SongIndexItem;