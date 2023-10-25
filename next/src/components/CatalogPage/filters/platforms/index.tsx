import React from 'react'
import styles from './platforms.module.scss'


const Platforms = () => {
  return (
    <div className={styles.root}>
       
            <ul className={styles.list} >
                <li>Steam</li>
                <li>PlayStation</li>
                <li>Xbox</li>
                <li>Uplay</li>
            </ul>
            
   
    </div>
  )
}

export default Platforms