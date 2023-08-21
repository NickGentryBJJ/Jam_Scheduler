import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSong} from '../../../store/songs'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './CreateSong.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function CreateSong() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [songName, setSongName] = useState("");
    const [originalArtist, setOriginalArtist] = useState("");
    const [desiredInstrument, setDesiredInstrument] = useState("");
    
    const sessionUser = useSelector(state => state.session.user)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[songName]', songName);
        formData.append('song[originalArtist]', originalArtist);
        formData.append('song[desiredInstrument]', desiredInstrument);
        formData.append('song[userId]', sessionUser.id );
        dispatch(createSong(formData)).then(() => history.go(`/users/${sessionUser.id}`));    
        
    }    
    
    
    if (!sessionUser) return <Redirect to='/login' />
    return (
        <div className='create-song-container'>
            <h1 className='add-songs-header'>
                Add More Songs!
            </h1>
            <form onSubmit={handleSubmit} className="create-song-form">
                <div className="song-label-container">
                    <label className='create-song-name'>
                        <h3 className='create-label-song'>
                            Title
                        </h3>
                        <textarea
                            placeholder='I Like It'
                            className='create-song-name-text'
                            type='textarea'
                            value={songName}
                            onInput={(e) => {
                                setSongName(e.target.value)
                            }}
                            required
                        ></textarea>
                    </label>
                    <label className='create-song-og-artist'>
                        <h3 className='create-label-song'>
                            Artist
                        </h3>
                        <textarea
                            placeholder='Debarge'
                            className='create-song-og-artist-text'
                            type='textarea'
                            value={originalArtist}
                            onInput={(e) => {
                                setOriginalArtist(e.target.value)
                            }}
                            required
                        ></textarea>
                    </label>
                    <label className='create-song-instrument'>
                        <h3 className='create-label-song'>
                            Your Instrument Selection
                        </h3>
                        <textarea
                            placeholder='Bass'
                            className='create-song-instrument-text'
                            type='textarea'
                            value={desiredInstrument}
                            onInput={(e) => {
                                setDesiredInstrument(e.target.value)
                            }}
                            required
                        ></textarea>
                    </label>
                    <button className='song-button' type='submit' >Add Song to Your List!</button>
                </div>
            </form >
        </div >
    )
}