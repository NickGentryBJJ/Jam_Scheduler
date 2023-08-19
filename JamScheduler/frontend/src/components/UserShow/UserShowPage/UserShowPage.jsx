import './UserShowPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../store/session';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers, updateUser } from '../../../store/users';
import UserSongList from '../UserSongList/UserSongList';
import { fetchSongs } from '../../../store/songs';
import CreateSong from '../CreateSong/CreateSong';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';




const UserShowPage = () => {
    
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(state => state.session.selectedUser);
    
    const sessionUser = useSelector(state => state.session.user);
    const [stageName, setStageName] = useState(sessionUser.stageName);
    const [photoFile, setPhotoFile] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");  
    const [editing, setEditing] = useState(false)

    
    
    useEffect(() => {
        dispatch(getUser(userId))
        dispatch(fetchSongs())
        // dispatch(fetchUsers())
    }, [dispatch, userId, editing])



    const handleEdit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (photoFile) {
            formData.append('user[photo]', photoFile);
        }
        formData.append('user[stageName]', stageName);
        setEditing(false)
        setPhotoUrl("");
        setPhotoFile("");
        return dispatch(updateUser(formData, userId))
    }

    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        setPhotoFile(file);
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result);
            } else setPhotoUrl(null);
    }   

    let preview = null;
    if (photoUrl) preview = <img className="preview-image-edit" src={photoUrl} alt="" />;

    // let eeedit;
    // if (user && user.user.id !== sessionUser.id) {
    //     eeedit = (
    //         <>
    //             <div className="user-show-wrapper">
    //                     <ul className="user-show-container">
    //                         <li><img className="prof-pic-user-show" src={user.user.photo} alt=''/></li>
    //                         <li className='user-show-info-name'>{user.user.stageName}</li>
    //                     </ul>
    //             </div>
    //         </>
    //         )
    // } else if (user && editing === false && user.user.id === sessionUser.id) {
    //     eeedit = (
    //     <>
    //         <div className="user-show-wrapper">
    //                 <ul className="user-show-container-po">
    //                     <li><img className="prof-pic-user-show" src={user.user.photo} alt=''/></li>
    //                     <li className='user-show-info-name'>{user.user.stageName}</li>
    //                     <button className='edit-user-button' onClick={() => {setEditing(true)}}>Edit</button>
    //                 </ul>
    //         </div>
    //     </>
    //     )
    // } else if(user && user.user.id === sessionUser.id && editing === true) {
    //     eeedit = (
    //         <>
    //             <div className='edit-user-show-wrapper'>
    //                 <div className="edit-user-show-container">
    //                     <form onSubmit={handleEdit}>
    //                         <li className='prof-pic-edit'>
    //                             <img className="edit-prof-pic-user-show" src={sessionUser.photo}/>
    //                                 <div>
    //                                     <label className='pic-edit-label'>Profile Picture
    //                                         <input type="file" onChange={handleFile} />
    //                                         <h3>Image preview</h3>
    //                                         {preview}    
    //                                     </label>
    //                                 </div>
    //                         </li>
    //                             <label>Stage Name <br />
    //                                 <input 
    //                                 type='text'
    //                                 value={stageName}
    //                                 onChange={(e) => setStageName(e.target.value)}
    //                                 className='user-show-info-name' 
    //                             />
    //                         </label> 
    //                         <br />
    //                         <button type="submit" className='update-user-button'>Update</button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </>
            
    //     )
    // }
    return ( 
        <>
            {/* {eeedit} */}
            {user ? 
            <div className="user-show-wrapper">
                    <CreateSong/>
                    <ul className="user-show-container-po">
                        <li className='user-show-info-name'>{user.user.stageName}'s Song List</li>
                        <UserSongList user={user}/>
                    </ul>
                    <UpcomingEvents/>
            </div>
            : null}
        </> 
    )
}

export default UserShowPage;