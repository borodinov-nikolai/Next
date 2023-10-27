'use client'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { setHeaderNavItem } from '@/redux_toolkit/slices/navigationSlice'
import Link from 'next/link'
import React from 'react'


interface Props {
    children: string,
    href: string
}


const ChangeNavbarItem : React.FC<Props> = ({children, href}) => {
    const {headerNavItem} = useAppSelector((state)=> state.navigation)
    const dispatch = useAppDispatch()
   

    
       
    
  
  return (
    <li style={headerNavItem === children? {borderTop: '2px solid black'}: undefined } onClick={()=>{dispatch(setHeaderNavItem(children))}} ><Link href={href} >{ children}</Link></li>
  )
}

export default ChangeNavbarItem