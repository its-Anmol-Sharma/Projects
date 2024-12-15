import React from 'react';
import style from "./About.module.css";
import AboutImg from "../../../assets/about/aboutImage.png";
import cursor from "../../../assets/about/cursorIcon.png";
import uil from "../../../assets/about/uiIcon.png";
import server from "../../../assets/about/serverIcon.png";

export const  About= () => {
  return (
 <section className={style.container} id='about'>
    <h2 className={style.title}>About</h2>
    <div className={style.content}>
        <img src={AboutImg }alt="My Image About" className={style.aboutImage} />
    <ul className={style.aboutItems} >

        <li className={style.aboutItem} > <img src={uil} alt="server" />
        <div className={style.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I'm a frontend Developer with experience in building responsive and optimized sites    </p>
        </div>
        </li>

        <li className={style.aboutItem} ><img src={server} alt="server" />
        <div className={style.aboutItemText}>
            <h3>React Developer</h3>
            <p>I'm a React Developer with experience in building responsive and optimized sites    </p>
        </div>
        </li>

        <li className={style.aboutItem} ><img src={cursor} alt="cursorIcon" />                     
        <div className={style.aboutItemText}>
            <h3>Software Testing</h3>
            <p>Meets the technical requirements set by its design and development , and satisfies user requirements efficiently and effectively. </p>
        </div>
        </li>


    </ul>


    </div>
    
 </section>
  )
}
