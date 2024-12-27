import React from 'react'
import styles from './ProjectCard.module.css'
import Source from './source';
import Demo from './Demo';


export const ProjectCard = ({project : {title,imageSrc,description,skills,demo,source}}) => {
  return (
    
    <div className={styles.container}>
        <img src={imageSrc} alt={`image of ${title}`} className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills} >
            {skills.map((skill,id)=>{
            <li key={id} className={styles.skill}>
                {skill}
            </li>;
            })}
        </ul>
        <div className={styles.links}> 
            <a href={demo} ><Demo/></a> 
             {/* < source/> */}
             {/* <a href={source} > < source/> </a> */}
            <a href={source}> <Source/> </a>
        </div>
      
       
    </div>

         
  ); 
}
  