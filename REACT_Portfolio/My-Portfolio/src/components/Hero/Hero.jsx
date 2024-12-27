import React from 'react'

import styles from "./Hero.module.css"
import AboutImg from "../../../assets/about/aboutImage.png";
import GetButton from './GetButton';
import Button from './downloadBtn';

export const Hero = () => {
  
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, My name is Anmol Sharma</h1>
        <p className={styles.discription}>Aspiring Software Engineer</p>

        {/* <div className="mt-4">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get in Touch
            </span>
          </button>
        </div> */}
        <div className={styles.buttons}>
          <GetButton />
          <Button />
        </div>
        

       
        {/* HERE TAILWIND CSS BUTTON TO BE ADDED*/}

    </div> 
    <img className={styles.heroImg} src={AboutImg} alt="Image mine" />
    <div className={styles.topblur} />
    <div className={styles.bottomblur} />
        
  </section>;
}

