'use client'
import { useAppDispatch, useAppSelector} from '@/redux_toolkit/hooks'
import { setGenre} from '@/redux_toolkit/slices/filtersSlice'
import { setPage } from '@/redux_toolkit/slices/paginationSlice'
import React from 'react'



interface Props {
  children: React.ReactNode,
  defaultValue: string | undefined,
  name: string
}

const ChangeGenre: React.FC<Props> = ({ children, defaultValue, name}) => {
  const{ genre} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()
  
  
  
  if(!defaultValue) {
    defaultValue = 'Все'
  }
  
  const change = ()=> {
    dispatch(setGenre(name));
    dispatch(setPage(1))
  }

  return (
    <li style={ (genre ? genre : defaultValue) ===  name ? {background: 'rgb(150 150 150)', color:'white', cursor:'default'}: undefined} onClick={change}>{children}</li>
  )
}

export default ChangeGenre