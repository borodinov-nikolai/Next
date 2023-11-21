'use client'
import React, { useState } from 'react'
import styles from './mobile_genres.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks';
import { setGenre, setPlatform } from '@/redux_toolkit/slices/filtersSlice';
import { setPage } from '@/redux_toolkit/slices/paginationSlice';
import { GenreData } from '@/interfaces/Genres';


interface Props {
  data: GenreData[],
  defaultValue: string | undefined,
  handleShowGenres : ()=> void,
  showGenres: boolean

}


const Mobile_genres : React.FC<Props> = ({defaultValue, data, handleShowGenres, showGenres}) => {
  const { genre } = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()


console.log(defaultValue)

  if(!defaultValue) {
    defaultValue = 'Все'
  }

  const change = (name:string)=> {
 

    dispatch(setGenre(name));
    dispatch(setPage(1))
    handleShowGenres()
  }
 



 const changedItem = data?.find(item=>item.attributes.name === defaultValue)

  return (
       
            <div className={styles.root} >
              <div className={styles.current_platform} >
                <div className={styles.change_title} >Жанр:</div>
                <div onClick={handleShowGenres}  className={[styles.item, styles.changed_item].join(' ')}>
                         <div className={styles.name} >{changedItem?.attributes.name}</div>
                         </div>
              </div>
              <div className={[styles.menu, styles[showGenres? 'menu_show' : 'menu_hide' ]].join(' ')} >
                <ul className={styles.menu_list} >
                  {
                    data?.map(({id, attributes})=> {
                      return ( <li  key={id} className={styles.item} style={(genre ? genre : defaultValue) === attributes.name ? { background: 'rgb(255, 255, 255)', color: 'black', borderRadius: '10px' } : undefined}
                       onClick={ ()=>change(attributes.name)}>
                         <div className={styles.name} >{attributes.name}</div>
                         </li>)
                
                    })
                  }
                </ul>
              </div>
            </div>
            
   
  )
}

export default Mobile_genres