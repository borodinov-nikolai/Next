'use client'
import { useAppDispatch, useAppSelector} from '@/redux_toolkit/hooks'
import { setGenre} from '@/redux_toolkit/slices/filtersSlice'
import React from 'react'



const ChangeGenre = ({ children}: {children:string}) => {
  const{ genre} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()


  return (
    <li style={genre === children? {background: 'rgb(92, 92, 92)', cursor:'default'}: undefined} onClick={()=>{ dispatch(setGenre(children))}}>{children}</li>
  )
}

export default ChangeGenre