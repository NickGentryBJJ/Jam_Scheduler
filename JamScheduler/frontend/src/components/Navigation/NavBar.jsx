import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './NavBar.css';
// import Searchbar from '../SearchBar/searchbar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function NavBar() {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    // let searchbar;
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    // searchbar = (
    //   <Searchbar />
    // )
    } else {
    sessionLinks = (
        <div className='nav-right'>
            <NavLink to="/signup">
                <button className='join'>Join Now</button>
            </NavLink>
            <NavLink to="/login">
                <button className='sign-in'>Sign In</button>
            </NavLink>
        </div>
    );
}

    return (
        <div className='nav-wrapper'>
            <div className='nav-left'>
                <div onClick={() => {history.push('/')}} className='logo'>
                    Jam Club
                </div>
                    {/* <div className='search-bar'>
                        {searchbar}
                    </div> */}
            </div>
            {sessionLinks}
        </div>
    );
}

export default NavBar;