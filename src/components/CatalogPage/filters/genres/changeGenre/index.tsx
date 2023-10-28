'use client'
import { useAppDispatch, useAppSelector} from '@/redux_toolkit/hooks'
import { setGenre} from '@/redux_toolkit/slices/filtersSlice'
import React from 'react'



const ChangeGenre = ({ children, defaultValue}: {children:string, defaultValue: string | undefined}) => {
  const{ genre} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()


  return (
    <li style={ (genre ? genre : defaultValue) ===  children ? {background: 'rgb(150 150 150)', color:'white', cursor:'default'}: undefined} onClick={()=>{ dispatch(setGenre(children))}}>{children}</li>
  )
}

export default ChangeGenre