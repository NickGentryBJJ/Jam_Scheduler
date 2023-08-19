import './UserShowPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../store/session';
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import UserSongList from '../UserSongList/UserSongList';
import { fetchSongs } from '../../../store/songs';
import CreateSong from '../CreateSong/CreateSong';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';




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
                <ul className="user-show-container-po">
                    <li className='user-show-info-name'>{user.user.stageName}'s Song List</li>
                    <UserSongList user={user}/>
                </ul>
                <UpcomingEvents user={user}/>
            </div>
            </>
            )
    } else if (user && user.user.id === sessionUser.id) {
        starFox = (
        <>
            <div className="user-show-wrapper">
                <CreateSong/>
                <ul className="user-show-container-po">
                    <li className='user-show-info-name'>{user.user.stageName}'s Song List</li>
                    <UserSongList user={user}/>
                </ul>
                <UpcomingEvents/>
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