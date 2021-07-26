import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logocolour from '../../assets/logocolour.svg'

import './styles.css'

const Header = (props) => {

    const {countCartItems} = props

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    
    return (
        <nav className="header">

            <div className="logo-container">
                <a href="../../"><img className="header-logo" src={logocolour} alt="cookie club logo"/></a>
            </div>

           <ul className={click ? "nav-options active" : "nav-options"}>
            
               <li className="option" onClick={closeMobileMenu}>
                   <a href="../../About">About</a>
               </li>
               <li className="option" onClick={closeMobileMenu}>
                   <a href="../../Flavours">Flavours</a>
               </li>
               <li className="option" onClick={closeMobileMenu}>
                   <a href="../../Shop">
                       
                       Shop {' '}
                       {countCartItems? (
                           <button className="badge">{countCartItems}</button>
                       ) : (
                           ''
                       )
                    }
                    
                    </a>
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
