import csrfFetch from "./csrf";

export const RECEIVE_SONG = 'songs/RECEIVE_SONG';
export const RECEIVE_SONGS = 'songs/RECEIVE_SONGS';
export const REMOVE_SONG = 'songs/REMOVE_SONG';

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs 
});

const removeSong = songId => ({
    type: REMOVE_SONG,
    songId
});

export const getSong = songId => state => {
    return state.songs ? state.songs[songId] : null;
}

export const getSongs = state => {
    return state.songs ? Object.values(state.songs) : [];
}


export const fetchSongs = () => async (dispatch) => {
    const response = await fetch ('/api/songs');
    if (response.ok) {
        const songs = await response.json();
        dispatch(receiveSongs(songs));
    }
};

export const fetchSong = songId => async (dispatch) => {
    const response = await fetch (`/api/songs/${songId}`);

    if (response.ok) {
        const song = await response.json();
        dispatch(receiveSong(song));
    }
};

export const createSong = formData => async (dispatch) =>{
    const response = await csrfFetch(`/api/songs`,{
        method: 'POST',
        body: formData
        })
    if(response.ok){
        const song = await response.json()
        dispatch(receiveSong(song))
        return song;
    }
}

export const updateSong = (song, formData) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${song.id}`, {
        method: 'PATCH',
        body: formData
    });

    if (response.ok) {
        const song = await response.json();
        dispatch(receiveSong(song));
    }
};

export const deleteSong = songId => async (dispatch) => {
    const response = await csrfFetch (`/api/songs/${songId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeSong(songId));
    }
};




const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_SONGS:
            return {...action.songs};
        case RECEIVE_SONG:
            return {...state, [action.song.id]: action.song };
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        default:
            return nextState;
    }
}

export default songsReducer;