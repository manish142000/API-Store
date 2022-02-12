import React from 'react';
import styles from "./navbar.module.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
  <div className={styles.navBar}>
    <div className='logo'>Logo</div>
    <ul className={styles.navList}>
        <li >
            <a href='#' className="navLink"></a>
        </li>
        <li>
            <Link to='/login' className="navLink">Login/SignUp</Link>
        </li>                        
    </ul>
  </div> 
  );
};

export default Navbar;
