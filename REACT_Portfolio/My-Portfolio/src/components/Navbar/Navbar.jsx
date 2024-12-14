import React, { useState } from 'react';
import open from "../../../assets/nav/menuIcon.png";
import close from "../../../assets/nav/closeIcon.png";
import logo from "../../../assets/logo/Portfolio-logo.png"
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [ menuOpen, setMenuOpen] = useState(false);
  // useState - Because we need to keep track of wheater the Hamburger Menu is Open or not 
  

  return(
    <nav className={styles.navbar}>
      <a className={styles.title} href="/"> <img src= {logo} alt="" /> </a>
        <div className={styles.menu}>
          <img className={styles.menuBtn}
          src={menuOpen
            ? close   
            : open }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)} />
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>        
            <li><a href="#projects">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        
          </ul>
      </div>
    </nav>
  );
};
