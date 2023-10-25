import React from 'react'
import styles from './genres.module.scss'


const Genres = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.list} >
        <li>Экшен</li>
        <li>Хоррор</li>
        <li>Файтинг</li>
        <li>Аркада</li>
      </ul>
      </div>
  )
}

export default Genres