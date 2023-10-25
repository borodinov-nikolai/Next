import React from 'react'
import styles from './genres.module.scss'
import { getGenres } from '@/http/serverApi'
import GenreChange from './genreChange'

const Genres = async () => {


  const genres = await getGenres()


  return (
      
    <div className={styles.root}>

    <ul className={styles.list} >
      {genres?.map((genre: {id: number, attributes: {name:string}})=> {
        return  (<GenreChange key={genre.id} >
                   {genre.attributes.name}
         </GenreChange>)
      })}
   
     
    </ul>
    </div>
  )
}

export default Genres