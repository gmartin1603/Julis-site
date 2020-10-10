import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ToggleButton from '../ToggleButton/ToggleButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Toolbar.css'
import { useStateValue } from '../context/StateProvider';

function Toolbar({logOut, handleDrawerClick, handleCartClick}) {

    const [{cart, isAdmin, user}, dispatch] = useStateValue()

    return (
        <div className="toolbar">
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toggle__button">
                        <ToggleButton click={handleDrawerClick}/>
                    </div>
                    <div className="toolbar__logo"><Link to="/">Juli's Juicy Thoughts</Link></div>
                    <div className="spacer"></div>
                    <div className="toolbar__navigation__items">
                        <NavLink to="/">Home</NavLink> 
                        {
                            isAdmin?  
                            <NavLink to="/Admin">Dashboard</NavLink> : ''
                        }
                        <NavLink to="/Orders">Orders</NavLink>
                        {
                            user? 
                            <NavLink to="/Log In" onClick={logOut}>Log Out</NavLink>
                            : 
                            <NavLink to="/Log In">Log In</NavLink> 
                        } 
                    </div>
                    {
                        isAdmin? '' :

                        <Link to="/cart">
                            <div className="toolbar__cart" onClick={handleCartClick}>
                                <ShoppingCartIcon/>
                                <p>{cart.length}</p>
                            </div>
                        </Link>
                    }
                </nav>
            </header>
        </div>
    );
}

export default Toolbar;