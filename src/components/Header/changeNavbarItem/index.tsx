'use client'
import Link from 'next/link'
import React from 'react'


interface Props {
    children: string,
    href: string
}


const ChangeNavbarItem : React.FC<Props> = ({children, href}) => {
  
    return (
       <li> <Link href={href}>{children}</Link></li>
  )
}

export default ChangeNavbarItem