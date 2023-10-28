import React from 'react'
import styles from './genres.module.scss'
import { getGenres } from '@/http/serverApi'
import ChangeGenre from './changeGenre'

const Genres = async ({defaultValue}:{defaultValue: string | undefined}) => {


  const genres = await getGenres()


  return (
      
    <div className={styles.root}>

    <ul className={styles.list} >
      {genres?.map((genre: {id: number, attributes: {name:string}})=> {
        return  (<ChangeGenre defaultValue={defaultValue} key={genre.id} >
                   {genre.attributes.name}
         </ChangeGenre>)
      })}
   
     
    </ul>
    </div>
  )
}

export default Genres