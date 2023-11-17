'use client'
import React from 'react'
import styles from './genres.module.scss'
import { GenreData } from '@/interfaces/Genres'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { setGenre } from '@/redux_toolkit/slices/filtersSlice'
import { setPage } from '@/redux_toolkit/slices/paginationSlice'


interface Props {
  data: GenreData[],
  defaultValue?: string
}

const Genres : React.FC<Props> = ({data , defaultValue}) => {
  const{ genre} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()


  if(!defaultValue) {
    defaultValue = 'Все'
  }
  
  const change = (name: string)=> {
    dispatch(setGenre(name));
    dispatch(setPage(1))
  }


  return (
      
   

    <ul className={styles.root} >
      {data?.map(({id, attributes})=> {
        return  (<li  className={styles.item} key={id} style={ (genre ? genre : defaultValue) === attributes.name ? {background: 'rgb(150 150 150)', color:'white', cursor:'default'}: undefined}
        onClick={()=> change(attributes.name)}>
          {attributes.name}
        </li>)
      })}
   
     
    </ul>
  
  )
}

export default Genres