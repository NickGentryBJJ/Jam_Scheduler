import React, { useEffect } from "react";
import './UserSongList.css'
import { fetchSongs } from "../../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import SongIndexItem from "../SongIndexItem/SongIndexItem";

function UserSongList({user}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch, user])
    
    const songs = useSelector(state => state.songs)
    const getUserSongs = (ss, user) => {
        let userSongs = [];
        for (let i = 0; i < ss.length; i++) {
            const song = ss[i];
            if (song.userId === user.user.id) {
                userSongs.push(song);
            }
        }
        return userSongs;
    }
    const userSongs = getUserSongs(songs, user);

    
    return (
        <div className="user-song-list-wrapper">
            {userSongs.map(song => (
                <li className="user-song"><SongIndexItem song={song}/></li>
            ))}
        </div>
    )
}

export default UserSongList;