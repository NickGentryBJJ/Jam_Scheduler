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




const songsReducer = (state = [], action) => {
    Object.freeze(state);

    let nextState = [...state]; // Create a copy of the current state array

    switch (action.type) {
        case RECEIVE_SONGS:
            const songsArray = Object.values(action.songs); // Convert the object values into an array
            return [...songsArray];
            case RECEIVE_SONG:
            nextState.push(action.song); // Add the new song to the array
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        default:
            return nextState;
    }
}

export default songsReducer;