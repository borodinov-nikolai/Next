'use client'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { setPlatform } from '@/redux_toolkit/slices/filtersSlice'
import { setPage } from '@/redux_toolkit/slices/paginationSlice'
import React from 'react'



interface Props {
  children: React.ReactNode,
  defaultValue: string | undefined,
  name: string
}

const ChangePlatform : React.FC<Props> = ({ children, defaultValue, name }) => {
  const { platform } = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()


  
  if(!defaultValue) {
    defaultValue = 'Все'
  }

  const change = ()=> {
    dispatch(setPlatform(name));
    dispatch(setPage(1))
  }


  return (
    <li style={(platform ? platform : defaultValue) === children ? { background: 'rgb(255, 255, 255)', color: 'black', borderRadius: '10px' } : undefined} onClick={change}>{children}</li>
  )
}

export default ChangePlatform