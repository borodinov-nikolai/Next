'use client'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { setHeaderNavItem } from '@/redux_toolkit/slices/navigationSlice'
import { useRouter } from 'next/navigation'
import React from 'react'


interface Props {
    children: string,
    href: string
}


const ChangeNavbarItem : React.FC<Props> = ({children, href}) => {
    const {headerNavItem} = useAppSelector((state)=> state.navigation)
    const dispatch = useAppDispatch()
    const router = useRouter()

  
console.log(headerNavItem)
    
       
    
    return (
       <li style={headerNavItem === href? {cursor:'default'}:undefined }  onClick={()=>{ headerNavItem === href ? undefined : (dispatch(setHeaderNavItem(href)), router.push(href))}} >{children}</li>
  )
}

export default ChangeNavbarItem