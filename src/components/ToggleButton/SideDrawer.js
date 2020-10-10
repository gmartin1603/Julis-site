import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import './SideDrawer.css'

function SideDrawer({logOut, show}) {
    let drawerClass = 'side__drawer'

    const [{user}, dispatch] = useStateValue()

    if(show) {
        drawerClass = 'side__drawer open'
    }

    return (
        <ul className={drawerClass}>
            <li><NavLink to="/">Home</NavLink></li> 
            <li><NavLink to="/Videos">Videos</NavLink></li> 
            <li><NavLink to="/Review">Reviews</NavLink></li> 
            <li><NavLink to="/Orders">Orders</NavLink></li>
            {
                user? 
                <li><NavLink to="/Log In" onClick={logOut}>Log Out</NavLink></li>
                :
                <li><NavLink to="/Log In">Log In</NavLink></li>
            }
        </ul>
    );
}

export default SideDrawer;