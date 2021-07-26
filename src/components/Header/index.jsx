import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logocolour from '../../assets/logocolour.svg'
import { Link } from "react-router-dom";

import './styles.css'

const Header = (props) => {

    const {countCartItems} = props

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    
    return (
        <nav className="header">

            <div className="logo-container">
                <Link to="/"><img className="header-logo" src={logocolour} alt="cookie club logo"/></Link>
            </div>

           <ul className={click ? "nav-options active" : "nav-options"}>
            
               <li className="option" onClick={closeMobileMenu}>
                   <Link to="/About">About</Link>
               </li>
               <li className="option" onClick={closeMobileMenu}>
                   <Link to="/Flavours">Flavours</Link>
               </li>
               <li className="option" onClick={closeMobileMenu}>
                   <Link to="/Shop">
                       
                       Shop
                    
                    </Link>
               </li>
           </ul>

           <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseIcon className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </nav>
    )
}

export default Header
