import React from "react";
import { useSelector } from "react-redux";
import SongIndexItem from "../SongIndexItem/SongIndexItem";
import './MutualSongList.css'

function MutualSongList({user}) {
    const sessionUser = useSelector(state => state.session.user);
    const songs = useSelector(state => state.songs);

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

    const getSessionUserSongs = (ss, user) => {
        let userSongs = [];
        for (let i = 0; i < ss.length; i++) {
            const song = ss[i];
            if (song.userId === user.id) {
                userSongs.push(song);
            }
        }
        return userSongs;
    }

    const getMutualSongs = (songList1, songList2) => {
        let mutualSongs = [];
        for (let i = 0; i < songList1.length; i++) {
            const song1 = songList1[i];
            for (let j = 0; j < songList2.length; j++) {
                const song2 = songList2[j];
                if (song1.songName.toLowerCase() === song2.songName.toLowerCase()) {
                    mutualSongs.push(song2)
                }
            }
        }
        return mutualSongs;
    }
    const userSongs = getUserSongs(songs, user);
    const sessionUserSongs = getSessionUserSongs(songs, sessionUser)
    const mutualSongs = getMutualSongs(userSongs, sessionUserSongs)
    
    return (
        <>
            <div className='user-show-info-name'>
                Shared Song List
            </div>
            <ul className="user-song-list-wrapper">
                {mutualSongs.reverse().map(song => (
                    <li className="user-song">
                        <SongIndexItem song={song}/>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MutualSongList;