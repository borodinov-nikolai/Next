'use client'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { setPlatform } from '@/redux_toolkit/slices/filtersSlice'
import React from 'react'



const ChangePlatform = ({children}: {children: string}) => {
  const {platform} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()
  return (
    <li style={platform === children ? {background:'rgb(255, 255, 255)', color: 'black', borderRadius: '10px' }: undefined} onClick={()=>dispatch(setPlatform(children))}>{children}</li>
  )
}

export default ChangePlatform