'use client'
import { useAppDispatch } from '@/redux_toolkit/hooks'
import { setPlatform } from '@/redux_toolkit/slices/filtersSlice'
import React from 'react'



const ChangePlatform = ({children}: {children: React.ReactNode}) => {
  const dispatch = useAppDispatch()
  return (
    <li onClick={()=>dispatch(setPlatform(String(children)))}>{children}</li>
  )
}

export default ChangePlatform