import React from 'react'
import styles from "../Contact/contect.module.css"  
import MediaLinks from './MediaLinks'

export const Contact = () => {
  return (
   <footer id="Contact" className={styles.Container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out</p>
        </div>
        {/* <ul className={styles.links}>
            <li className={styles.link}>
                <img src={email} alt="Email.com" />
                <a href="acaa.2@gmail.com">E-mail</a>
            </li>
            <li className={styles.link}>
                <img src={github} alt="github.com" />
                <a href="acaa.2@gmail.com">github</a>
            </li >

            <li className={styles.link}>
                <img src={linkedin} alt="linked in.com" />
                <a href="acaa.2@gmail.com">Linked In</a>
            </li>

           
        </ul> */}
        <MediaLinks/>
   </footer>
  )
}
