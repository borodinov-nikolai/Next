'use client'
import { useAppDispatch} from '@/redux_toolkit/hooks'
import { setGenre} from '@/redux_toolkit/slices/filtersSlice'
import React from 'react'



const ChangeGenre = ({ children}: {children:React.ReactNode}) => {
  const dispatch = useAppDispatch()
  

  return (
    <li onClick={()=>{ dispatch(setGenre(String(children)))}}>{children}</li>
  )
}

export default ChangeGenre