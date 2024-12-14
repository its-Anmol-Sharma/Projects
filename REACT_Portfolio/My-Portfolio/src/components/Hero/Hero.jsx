import React from 'react'

import styles from "./Hero.module.css"
import photo from "../../../assets/hero/My-photo-Portfolio-modified.png"
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, My name is Anmol Sharma</h1>
        <p className={styles.discription}>Aspiring Software Engineer</p>
        <a href="akhusharma07@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div> 
    <img className={styles.heroImg} src={photo} alt="Image mine" />
    <div className={styles.topblur} />
    <div className={styles.bottomblur} />
    
        
  </section>;
}
