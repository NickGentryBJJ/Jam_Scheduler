import React from "react";
import { useSelector } from "react-redux";

function MutualSongIndexItem(song) {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="song-index-item">
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
                <h2 className="desired-instrument">
                    <span className="inst-span">
                        Your Preferred Part:
                    </span> {song.userSong.desiredInstrument}
                </h2>
            </div>
        </div>
    )
}

export default MutualSongIndexItem;