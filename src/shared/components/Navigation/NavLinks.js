import React, {useContext} from 'react';
import './NavLinks.css'
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../../context/auth-context';


const NavLinks = props => {
const auth = useContext(AuthContext);

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Users</NavLink>
        </li>
        {auth.isLoggedIn && (
            <li>
                <NavLink to="/u1/places">My Places</NavLink>
            </li>
        )}
        {auth.isLoggedIn && (
            <li>
                <NavLink to="/places/new">Add Place</NavLink>
            </li>
    )}
        {!auth.isLoggedIn && (
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
    )}
    {auth.isLoggedIn && 
    <li>
        <button onClick={auth.logout}>
            Logout
        </button>
    </li>
    }
    </ul>;

};

export default NavLinks;