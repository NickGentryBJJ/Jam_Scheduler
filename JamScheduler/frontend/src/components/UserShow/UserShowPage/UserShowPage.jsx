import './UserShowPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../store/session';
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import UserSongList from '../UserSongList/UserSongList';
import { fetchSongs } from '../../../store/songs';
import CreateSong from '../CreateSong/CreateSong';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import MutualSongList from '../MutualSongList/MutualSongList';




const UserShowPage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(state => state.session.selectedUser);
    const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(getUser(userId))
        dispatch(fetchSongs())
        // dispatch(fetchUsers())
    }, [dispatch, userId])


    let starFox;
    if (user && user.user.id !== sessionUser.id) {
        starFox = (
            <>
            <div className="user-show-wrapper">
                <div className="user-songs-container">
                    <UserSongList user={user}/>
                </div>
                <div className='mutual-songs-container'>
                    <MutualSongList user={user}/>
                </div>
            </div>
            </>
            )
    } else if (user && user.user.id === sessionUser.id) {
        starFox = (
        <>
            <div className="user-show-wrapper">
                <CreateSong/>
                <div className="user-show-container">
                    <UserSongList user={user}/>
                </div>
                <UpcomingEvents user={user}/>
            </div>
        </>
        )
    }
    return ( 
        <>
            {starFox}
        </> 
    )
}

export default UserShowPage;