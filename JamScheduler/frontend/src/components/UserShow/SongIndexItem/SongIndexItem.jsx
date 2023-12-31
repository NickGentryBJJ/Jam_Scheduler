import React, { useState } from "react";
import './SongIndexItem.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteSong, updateSong } from "../../../store/songs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SongIndexItem(song) {

    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    const [editing, setEditing] = useState(false);
    const [songName, setSongName] = useState(song.song.songName);
    const [ogArtist, setOgArtist] = useState(song.song.originalArtist);
    const [desiredInstrument, setDesiredInstrument] = useState(song.song.desiredInstrument);


    const handleDelete = () => {
        history.go();
        dispatch(deleteSong(song.song.id));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[songName]', songName);
        formData.append('song[originalArtist]', ogArtist);
        formData.append('song[desiredInstrument]', desiredInstrument);
        formData.append('song[userId]', sessionUser.id );
        dispatch(updateSong(song.song, formData))
        setEditing(false)
        history.go();
    }


    // smash remix!!! this variable returns a song item containing a delete and edit button depending 
    // on the user associated with the song. pretty neat!
    
    let remix;
    if (song.song.userId === sessionUser.id && editing === true) {
        remix = (
            <div className="song-index-item">
                <div className="wrapper-song">
                        <form className="song-edit-form" onSubmit={handleSubmit}>
                            <div className="edit-info-container">
                                <div className="song-edit-info-container">
                                    <span className="artist-span">
                                        Title:
                                    </span>
                                    <div
                                    className="edit-song-title"
                                    contentEditable
                                    onInput={(e) => {
                                        setSongName(e.target.innerText)
                                    }}
                                    dangerouslySetInnerHTML={{ __html: song.song.songName }}
                                    />
                                </div>    
                                <div className="song-edit-info-container">
                                    <h1 className="artist-span">
                                        Artist:
                                    </h1>
                                    <div
                                    className="edit-song-artist"
                                    contentEditable
                                    onInput={(e) => {
                                        setOgArtist(e.target.innerText)
                                    }}
                                    dangerouslySetInnerHTML={{ __html: song.song.originalArtist }}
                                    />
                                </div>
                                <div className="song-edit-info-container">
                                    <h1 className="artist-span">
                                        Preferred Part:
                                    </h1>
                                    <div
                                    className="edit-desired-instrument"
                                    contentEditable
                                    onInput={(e) => {
                                        setDesiredInstrument(e.target.innerText)
                                    }}
                                    dangerouslySetInnerHTML={{ __html: song.song.desiredInstrument }}
                                    />
                                </div>
                            </div>
                                <div className="mod-menue">
                                    <button type="submit" className="edit-song-button">Save Song</button>
                                    <button onClick={()=>{setEditing(false)}} className="delete-song-button">Cancel</button>
                                </div>
                        </form>
                    </div>
                </div>
        )
    } else if (song.song.userId === sessionUser.id && editing !== true) {
        remix = (
        <div className="song-index-item">
            <div className="wrapper-song-user">
                <div className="song-info-user">
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
                            Preferred Part:
                        </span> {song.song.desiredInstrument}
                    </h2>
                </div>
                <div className="mod-menue">
                    <button onClick={()=>{setEditing(true)}} className="edit-song-button">Edit</button>
                    <button onClick={handleDelete} className="delete-song-button">Delete</button>
                </div>
            </div>
        </div>
        )
    } else if(song.song.userId !== sessionUser.id) {
        remix = (
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
                        Preferred Part:
                    </span> {song.song.desiredInstrument}
                </h2>
            </div>
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