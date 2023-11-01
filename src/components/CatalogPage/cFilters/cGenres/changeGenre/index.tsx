'use client'
import { useAppDispatch, useAppSelector} from '@/redux_toolkit/hooks'
import { setGenre} from '@/redux_toolkit/slices/filtersSlice'
import React from 'react'



const ChangeGenre = ({ children, defaultValue, name}: {children: React.ReactNode, defaultValue: string | undefined, name: string}) => {
  const{ genre} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()
  
  
  
  if(!defaultValue) {
    defaultValue = 'Все'
  }
  
 

  return (
    <li style={ (genre ? genre : defaultValue) ===  name ? {background: 'rgb(150 150 150)', color:'white', cursor:'default'}: undefined} onClick={()=>{dispatch(setGenre(name))}}>{children}</li>
  )
}

export default ChangeGenre